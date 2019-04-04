/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);

        resolve(
            graphql(`
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                frontmatter {
                                    path
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                const posts = result.data.allMarkdownRemark.edges;
                posts.forEach(({ node }, index) => {
                    const previous =
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;
                    const path = node.frontmatter.path;
                    createPage({
                        path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path,
                            previous,
                            next,
                        },
                    });
                });
            }),
        );
    });
};
