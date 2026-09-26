const imageExtensions = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function splitLink(value) {
  const [target, label] = value.split("|", 2).map((part) => part.trim());
  return { target, label };
}

function withTrailingSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function getPageUrl(target, wikiBase) {
  const [path, anchor] = target.split("#", 2);
  const normalized = path.replace(/\.(md|markdown)$/i, "");
  const base = normalized.startsWith("/") ? normalized : `${wikiBase}${normalized}`;
  const url = withTrailingSlash(base);

  return anchor ? `${url}#${encodeURIComponent(anchor)}` : url;
}

function getImageUrl(target, siteUrl, pathPrefix) {
  const path = target.replace(/^\/+/, "");
  const prefix = pathPrefix.endsWith("/") ? pathPrefix : `${pathPrefix}/`;
  return new URL(`${prefix}${path}`, siteUrl).toString();
}

/**
 * Minimal Obsidian-style links for this site:
 * - [[post-slug]] links to /blog/post-slug/
 * - [[/path]] links to an absolute site path
 * - ![[/images/file.png]] renders an image
 */
export default function obsidianLinks(md, options) {
  const { siteUrl, pathPrefix = "/", wikiBase = "/blog/" } = options;

  function render(value) {
    const { target, label } = splitLink(value);

    if (imageExtensions.test(target) && !target.includes("..")) {
      const isCentered = label.toLowerCase() === "center";
      const alt = isCentered ? target.split("/").at(-1).replace(imageExtensions, "") : label || target.split("/").at(-1).replace(imageExtensions, "");
      const src = getImageUrl(target, siteUrl, pathPrefix);
      const className = isCentered ? ' class="obsidian-image-center"' : "";
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}"${className} eleventy:ignore>`;
    }

    const text = label || target.replace(/[-_]/g, " ");
    return `<a href="${escapeHtml(getPageUrl(target, wikiBase))}">${escapeHtml(text)}</a>`;
  }

  md.block.ruler.before("paragraph", "obsidian_image", (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const line = state.src.slice(start, state.eMarks[startLine]).trim();
    const match = line.match(/^!\[\[([^\]\n]+)\]\]$/);

    if (!match || !imageExtensions.test(splitLink(match[1]).target)) return false;
    if (silent) return true;

    const token = state.push("html_block", "", 0);
    token.content = `${render(match[1])}\n`;
    state.line = startLine + 1;
    return true;
  });

  md.inline.ruler.before("emphasis", "obsidian_links", (state, silent) => {
    const isImage = state.src.startsWith("![[", state.pos);
    const isLink = state.src.startsWith("[[", state.pos);
    if (!isImage && !isLink) return false;

    const start = state.pos + (isImage ? 3 : 2);
    const end = state.src.indexOf("]]", start);
    if (end === -1) return false;

    if (!silent) {
      const token = state.push("html_inline", "", 0);
      token.content = render(state.src.slice(start, end));
    }

    state.pos = end + 2;
    return true;
  });
}
