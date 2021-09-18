require('dotenv').config({
    path: '../.env.local'
})
const axios = require('axios')
const fs = require("fs");
const prettier = require("prettier");
const getDate = new Date().toISOString();
const YOUR_AWESOME_DOMAIN = "https://www.z00mni.com";
const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {

    let response = [];
    await axios({
        method: 'post',
        url: process.env.BASE_URL,
        data: {
            query: `
                query getPostsId {
                    posts {
                        _id
                    }
                }
            `
        },
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        response = res.data.data.posts
    }).catch(err => console.log(err))

    const postList = []
    response.forEach(post => postList.push(post._id))
    const postListSitemap = `
    ${postList
        .map(_id => {
            return `
          <url>
            <loc>${`${YOUR_AWESOME_DOMAIN}/posts/${_id}`}</loc>
            <lastmod>${getDate}</lastmod>
          </url>`;
        })
        .join("")}
  `;

    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${postListSitemap}
    </urlset>
  `;

    const formattedSitemap = [formatted(generatedSitemap)].toString();

    fs.writeFileSync("../public/sitemap/sitemap-posts.xml", formattedSitemap, "utf8");
})();