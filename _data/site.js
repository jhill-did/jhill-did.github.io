const siteUrl = process.env.CI ? "https://jhill-did.github.io" : "http://localhost:8080";

module.exports = {
  title: "jhill-did.github.io",
  description: "A technical blog for notes, experiments, and write-ups on software, infrastructure, and development workflows.",
  url: siteUrl,
  language: "en",
  author: {
    name: "Your Name",
    email: "you@example.com"
  }
};
