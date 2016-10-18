1-By counting the number of render-blocking external resources that must be loaded
2-Parse HTML, Recalculate Style, Layout
3-
The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.
4-
a)Don't write JavaScript that forces the browser to recalculate layout. Separate read and write functions, and perform reads first.
b)Don't over-complicate your CSS. Use less CSS and keep your CSS selectors simple.
c)Avoid layout as much as possible. Choose CSS that doesn't trigger layout at all.
5-PageSpeed Insights
6-
