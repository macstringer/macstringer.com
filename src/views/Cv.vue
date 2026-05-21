<template>
    <div class="content">
        <div class="contentMain">

            <div class="cv-header">
                <p class="email">jmacstringer@gmail.com</p>
            </div>

            <div class="element">
                <h1> Education </h1>
                <div class="card">
                    <h2> Duke University, Durham NC </h2>
                    <h3> May 2022 </h3>
                    <p> Double Major: Computer Science, Political Science; Minor: Chinese (你好!) </p>
                </div>
            </div>

            <div class="element">
                <h1> Work Experience </h1>

                <div class="card">
                    <h2> Toshiba Global Commerce Solutions </h2>
                    <h3> Jan 2023 – Present </h3>
                    <p><b>Sales Engineer IV</b> — Aug 2024 – Present</p>
                    <p> Co-architected and led end-to-end development of Toshiba's first fully functional fuel & convenience software product; scoped requirements, managed a direct report, ran live demos, and opened a $1B vertical. </p>
                    <p> Designs and teaches the UI module as 1 of 3 instructors for Toshiba's ~$500k+ development boot camp program (5 cohorts, ~12 participants at $10k/seat). </p>
                    <p> Built and presented live demos to 16 retailers including Ikea, Whole Foods, contributing to 4 closed deals. </p>
                    <p><b>Software Engineer I</b> — Jan 2023 – Aug 2024</p>
                    <p> Developed checkout gift card cash-out feature across Vue/TypeScript frontend and Java/MongoDB backend. </p>
                    <p> Architected and deployed Azure cloud environment for a major version release of our enterprise software. </p>
                </div>

                <div class="card">
                    <h2> 314Action — Software Engineering Intern </h2>
                    <h3> Jan 2022 – Apr 2022 </h3>
                    <p> Constructed Python/pandas script to clean, consolidate, and filter through millions of records to identify STEM professionals who had donated to political campaigns. </p>
                    <p> Optimized Airtable database using automation to sync data across sheets, reducing manual data entry. </p>
                </div>

                <div class="card">
                    <h2> Cal Cunningham Senate Finance Team — Data Science Intern </h2>
                    <h3> Aug 2020 – Nov 2020 </h3>
                    <p> Developed web scraper using Python and Selenium to automate and optimize gathering voter information, voter reach-out, and data storage, providing a 200x improvement in efficiency of process. </p>
                    <p> Scaled program to accept configurable variables for reuse across other campaigns. </p>
                </div>

                <div class="card">
                    <h2> Global America Business Institute (GABI) — Research Intern </h2>
                    <h3> June 2019 – Aug 2019 </h3>
                    <p> Reported on dozens of DC-area environmental and international policy events in a monthly newsletter for subscribers including energy research institutions in Korea. </p>
                    <p> Drafted ~30 summary memos on energy policy subjects including nuclear disarmament, US natural gas exports, and the environmental impacts of China's Belt and Road plan. </p>
                    <p> Conducted research to write a whitepaper on climate policy and the Green New Deal in the 2020 election. </p>
                </div>

                <div class="card">
                    <h2> Chapel Hill Youth Council (CHYC) — Founder, President </h2>
                    <h3> Nov 2014 – May 2018 </h3>
                    <p> Founded town's Youth Council, growing membership from 3 to 30+ through service and civic engagement. </p>
                    <p> Served as Youth Liaison to Chapel Hill's Community Design Commission, advising on town development. </p>
                </div>
            </div>

            <div class="element">
                <h1> Skills and Languages </h1>
                <div class="card">
                    <p><b>Programming:</b> TypeScript, Vue(x), React, Python, Java, JavaScript, HTML/CSS, Pandas, Selenium</p>
                    <p><b>Technology:</b> git, Linux, JetBrains IDEs, Node/npm, zsh, Bash</p>
                    <p><b>Infrastructure:</b> Docker/Kubernetes, MongoDB, Jenkins, Azure CloudOps</p>
                    <p><b>Foreign Language:</b> Mandarin Chinese (studied)</p>
                </div>
            </div>

            <div class="element">
                <h1> Technical Projects </h1>
                <div class="card">
                    <h2><a href="https://macstringer.github.io/congop/" target="_blank" rel="noopener">Congressional Opportunities Listings</a></h2>
                    <p> VueJS tool developed at the request of a professor to help political science students discover and filter congressional internship openings. </p>
                </div>
                <div class="card">
                    <h2><a href="https://macstringer.github.io/fecmvpish" target="_blank" rel="noopener">FEC Open API Page</a></h2>
                    <p> Tool to download and explore candidate campaign finance data from the FEC. </p>
                </div>
            </div>

            <div class="element">
                <h1> Research </h1>
                <div class="card">
                    <h2><a href="https://www.mjz.co.zm/index.php/mjz/article/view/93/82" target="_blank" rel="noopener">The Lunar Effect on Delivery and Other Birth Outcomes in Rural Zambia</a></h2>
                    <h3> Medical Journal of Zambia, Vol. 44, No. 4: 233–137 (2017) </h3>
                    <p> Analyzed birth outcome data from rural Zambia to debunk the lunar effect on delivery — published in the Medical Journal of Zambia (2017). </p>
                </div>
            </div>

            <div class="element">
                <h1> Hobbies </h1>
                <div class="card">
                    <p><b>Carpentry</b> (Furniture & climbing wall)</p>
                    <p><b>Board Sports</b> (snow, skate, surf)</p>
                    <p><b>Strategy Games</b> (Poker, Mahjong, Chess)</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
  color: #2e2e2e;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 2.25rem;
}
h2 {
  color: #2e2e2e;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.5rem;
}
h3 {
  color: #929292;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: normal;
}

p {
  font-size: 1.25rem;
  font-family: "Neue Haas Grotesk Display Pro", "Helvetica Neue", Helvetica, sans-serif;
  color: #2e2e2e;
  line-height: 1.75rem;
  margin-bottom: 0%;
  margin-top: 1%;
}

a {
  color: inherit;
  text-decoration: underline;
}

a:hover {
  filter: brightness(2.5);
}

.cv-header {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.email a {
  font-size: 1.1rem;
  font-family: "Neue Haas Grotesk Display Pro", "Helvetica Neue", Helvetica, sans-serif;
}

.contentMain {
    color: #2e2e2e;
    margin-left: 3%;
    margin-right: 3%;
    max-width: 50rem;
}

.content {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
}

.element {
    padding-bottom: 3%;
}
.card {
    padding-bottom: 3%;
    padding-left: 3%;
}

</style>
