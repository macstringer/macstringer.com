<template>
    <div class="content">
        <div class="contentMain">
            <div class="element">
                <h1> Education </h1>
                <div class="card">
                    <h2> Duke University, Durham NC </h2>
                    <h3> Graduation Year: 2022 </h3>
                    <p>  Major: Political Science, Computer Science; Minor: Chinese (你好!)</p>
                    <p>  Relevant Coursework: Data Structures & Algorithms, Web Development, Computer Architecture </p>
                </div>
            </div>

            <div class="element">
                <h1> Work Experience </h1>
                <div class="card">
                    <h2> 314Action - Software Engineering Intern </h2>
                    <h3> Jan 2022 - April 2022 </h3>
                    <p> Constructed a comprehensive and adaptive Python/PANDAS script to clean, consolidate, and filter through
                        millions of records to identify STEM professionals who had donated to political campaigns.
                    </p>
                    <p> Worked on a full-stack FEC API, with a React and Flask to provide easy access to FEC data. </p>
                    <p> Optimized Airtable database, using automation functions to sync data across sheets, saving time in data entry. </p>
                </div>

                <div class="card">
                    <h2> Cal Cunningham Senate Finance Team – Data Science Intern </h2>
                    <h3> Aug 2020 – Nov 2020 </h3>
                    <p>
                        Developed web scraper using Python and Selenium to automate and optimize gathering voter information, voter reach-out, and data storage, providing a 200x improvement in efficiency of process.
                    </p>
                    <p>
                        Worked in cross-functional team with other campaign workers and North Carolina DNC
                    </p>
                    <p>
                        Scaled program to be applicable for other campaigns after NCDP expressed interest in its application.
                    </p>
                </div>
                <div class="card">
                    <h2> Global America Business Institute (GABI) – Research Intern </h2>
                    <h3> June 2019 - Aug 2019 </h3>
                    <p>
                        Reported on dozens of DC-area environmental and international policy events, pursuant to GABI formats and standards, in a monthly newsletter for submission to subscribers, including energy research institutions in Korea.
                    </p>
                    <p>
                        Drafted ~30 summary memos on various energy policy subjects including, nuclear disarmament, US natural gas exports, and the environmental impacts of China’s one belt one road plan. 
                    </p>
                    <p>
                        Conducted detailed research to write whitepaper on climate policy and the Green New Deal in the 2020 election. 
                    </p>
                </div>
            </div>

            <div class="element">
                <h1> Languages and Skills </h1>
                <div class="card">
                    <div> 
                        <p> <b> Programming: </b> </p>
                        <p class="skillList"> Python, Java, C stdlib, JavaScript, HTML/CSS, Vue, React, PANDAS, Selenium </p>
                    </div>
                    <div>
                        <p> <b> Technology: </b> </p>
                        <p class="skillList"> GIT, Jetbrains IDEs, Node/npm, zsh, Bash, Microsoft Office Suite, macOS, iOS </p>
                    </div>
                    
                    <div>
                        <p> <b> Foreign: </b> </p>
                        <p class="skillList"> Mandarin Chinese (proficient) </p>
                    </div>
                </div>

                <div class="card">
                    <h2> Foreign Languages </h2>
                    <p> Mandarin Chinese (Proficient) </p>
                </div>

            </div>

            <div class="element">
                <h1> Leadership Experience </h1>
                <div class="card">
                    <h2>Duke Engage Program in Washington DC </h2>
                    <h3> June 2019 - Aug 2019 </h3>
                    <p>
                        Competed for, and accepted into, competitive Duke Engage service-learning program away from campus.
                    </p>
                    <p>
                        Participated in team service projects, one where I weeded, watered, and tilled for a community garden in DC’s 8th ward, and another where I helped to organize, service, and work at a local free food market downtown. 
                    </p>
                    <p>
                        Strengthened my knowledge on political, social, and international affairs by attending talks on a variety of subjects: NC hog farming, NIH cancer research, modern conservatism, local gentrification, etc.
                    </p>
                </div>
            </div>
            
            <div class="element">
                <h1> Research </h1>
                <div class="card">
                    <h2> The Lunar Effect on Delivery and Other Birth Outcomes in Rural Zambia </h2>
                    <h3> Medical Journal of Zambia, Vol. 44, No. 4: 233-137 (2017). https://www.mjz.co.zm/index.php/mjz/article/view/93/82.</h3> 
                    <p> Published paper analyzing birth outcomes in rural Zambia, with BHOMA delivery data and lunar phase data, in the Medical Journal of Zambia </p>
                </div>
            </div>

            <div class="element">
                <h1> Hobbies </h1>
                <p> <b> Carpentry </b> </p>
                <p> <b> Board Sports </b>(Snow, Skate, Surf)</p>
                <p> <b> Chess </b> rated 1250 on chess.com </p>

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
  font-family: “Neue Haas Grotesk Display Pro”, “Helvetica Neue”, Helvetica, sans-serif;
  color: #2e2e2e;
  line-height: 1.75rem;
  margin-bottom: 0%;
  margin-top: 1%;
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

.skillList{
    margin-left: 5%;
}

</style>

To Do: 

- Make everything on my cv page a link
- "Skills and interests" should link to projects that demonstrate my skills
    - Coding skills should include code