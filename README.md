# Theme Switcher with Ant Design
This example should demonstrate to you how a theme switcher can be implemented for the Ant Design component library.

You can see it in action on [here](https://chrsi.github.io/antd-theme-switcher-example/).

Please also take a look at my [dev.to Post](https://dev.to/chrsi/switching-themes-in-a-react-app-with-ant-design-p8m). It describes the approach in more detail.

# Implementation Variants
I implemented/extended theme switchin in various ways. *Scoping via Less* is the preferred way because it doesn't use another library for scoping.
## Scoping via Less
Branch: [less (default)](https://github.com/chrsi/antd-theme-switcher-example/tree/less)

Scoping via less works by nesting all the ant design style imports into a `.light`/`.dark-class`. At the moment I didn't implement lazy loading or storing the current theme. But it's basically them same as with the PostCSS solution.

## Scoping via PostCSS PrefixCSS
Branch: [postcss](https://github.com/chrsi/antd-theme-switcher-example/tree/postcss)

This is an outdated solution that used the PrefixCSS functionality of PostCSS to prefix every ant design styling rule with either `.light` or `.dark`.

### Lazy Loading
Commit: [Only request a single theme initially](https://github.com/chrsi/antd-theme-switcher-example/commit/85bd9df1766656449ca77c20e5290beccae18dd8)

The theme can be lazy loaded by using the import-function of webpack.

### Storing the selected theme
Commit: [Reuse the same theme from the last session](https://github.com/chrsi/antd-theme-switcher-example/commit/8e25f15ad80b64c7dacaa60ed046e407c11336d7)

This change lets you reuse the theme that was set in the previous session by storing it in the local storage.