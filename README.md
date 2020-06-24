## Rebuilding The School's Website

### About This Repository

In this repository, you can find a completely rebuilt version of the WHG's website. This project was started because of the very poor performance of the original one.
It's an attempt at fixing its design and performance flaws with modern web technologies.

### Analysis Of The Old Website

![Status](https://img.shields.io/badge/Performance-25-critical?style=flat-square)
![Status](https://img.shields.io/badge/Accessibility-94-success?style=flat-square)
![Status](https://img.shields.io/badge/Best%20Practices-71-important?style=flat-square)
![Status](https://img.shields.io/badge/SEO-90-success?style=flat-square)

#### Automated Testing

The website has been tested automatically using Lighthouse.
The test results are available [online](https://whg-durmersheim.github.io/school-website-concept/lighthouse) but will also be described in this document.

##### Performance

With a performance score of 25, the website is very slow.
This might be the case because text compression is disabled and a lot of unused `CSS` and `JavaScript` are delivered. Furthermore, the `DOM` is extremely large and unnecessary complex.

##### Accessibility

With 94 the accessibility score is pretty good, but the used text color is hard to read for users with low vision and some links do not have a discernible name, which makes it impossible to use the website for blind users.
Also, empty alternative texts for images are not useful for blind people that cannot see images.

##### Best Practices

For this section, the most important point is that the site does not use a secure connection (`HTTPS`), which will result in some anti-virus programs blocking the site and browsers displaying it as unsafe.
Furthermore, the site uses unsafe resources from other domains and `jQuery` 1.9.1, which has two known security vulnerabilities.

##### SEO

The site does not provide a description to search engines like Google etc.

#### Design Inspection And Other Flaws

The website has a lot of design inconsistencies and does not follow a specific grid, which makes the website appear unprofessional and unpleasing to look at.
The search bar does not follow the grid layout, the articles on the main page are hard to read on the mobile version, the stripes do not align with the other content on the website, and sometimes images refuse to load or load incorrectly.

### How To Improve The Site
To improve the website it is important to minify `JavaScript` and `CSS` files and reduce the server's response time.
With a simpler `DOM` and without unnecessary libraries like `Bootstrap` and `jQuery` the website will load faster.
Furthermore, modern technologies like the `Progressive Web App` specification can make the website significantly faster and even provide an offline version.
