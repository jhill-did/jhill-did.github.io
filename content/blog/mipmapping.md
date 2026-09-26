---
title: Mipmapping
description: A look at how mipmapping works and some applications 
date: 2026-09-25
draft: true
tags:
  - graphics
---

Mipmapping involves creating half resolution versions of an image like so

Mipmapping is a texture filtering approach where details are averaged into a series of smaller resolution images. This is typically done by recursively halving the resolution of the image and for each resulting pixel averaging a 4x4 texel neighborhood from the source image

![[/images/mipmapping.png]]

[[lorem-ipsum]]

## Motivation


```cpp
#include <iostream>

int main() {
  std::cout << "Hello, world!" << std::endl;
  return 0;
}
```

```js
// Say hello a few times
function greet(name, times = 3) {
  for (let i = 0; i < times; i++) {
    console.log(`Hello, ${name}! (${i + 1})`);
  }
}

greet("world");
```

```ts
interface Greeting {
  name: string;
  excited?: boolean;
}

function greet({ name, excited = false }: Greeting): string {
  return `Hello, ${name}${excited ? "!" : "."}`;
}

console.log(greet({ name: "world", excited: true }));
```

```glsl
#version 330 core

in vec2 vUv;
uniform sampler2D uTexture;
out vec4 fragColor;

void main() {
    // Sample the texture at a lower mip level
    vec4 color = textureLod(uTexture, vUv, 2.0);
    fragColor = vec4(color.rgb * 0.5 + 0.5, 1.0);
}
```

```bash
npm install --save-dev @11ty/eleventy
```

```shell-session
$ g++ -o hello hello.cpp && ./hello
Hello, world!
$ echo $?
0
```
