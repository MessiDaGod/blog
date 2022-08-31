# Source code of my blog

https://messidagod.github.io/blog/

The posts are written in Markdown that is parsed by Pandoc, with the Pandoc AST rendered with React. This is done so the React renderer can have a few custom components, especially code blocks with specific tags are interpreted as e.g. interactive demos or charts. All the React stuff is rendered server-side with next.js to static HTML files. So most of the blog should work without JS.

It also generates an RSS feed for people that are into that.

# Steps to Install 
1. ```shell
yarn install
```

2. ```shell
yarn posts
```

3. ```shell
yarn dev
```

Run `yarn build` to run all the build steps, or `yarn commit` to commit a new blog version ready for pushing.
