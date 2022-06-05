<h1>Coates Group Assessment</h1>

<p>In order to run this project locally you will need to:</p>
<ol>
<li>Create a .env file in the root directory and copy the following into it. This is not an ideal way to work with this
and it would usually be encouraged to work with keystore or something similar.</li>
<code>
REACT_APP_API_KEY=c312d8b37bab78e2f76421c1330a3ee9
REACT_APP_CITY_URL=http://api.openweathermap.org/geo/1.0/direct
REACT_APP_WEATHER_URL=https://api.openweathermap.org/data/2.5/onecall
</code>
<li>Run <code>npm install</code> </li>
<li>Run <code>npm start </code></li>
</ol>

<h3>Notes</h3>
<h4>A note on state management:</h4><p> I could have used the the react context or something like redux toolkit but there really is no need for this app as it sits right now. It would be a consideration before more features were implemented: future use is actually part of the reason I did not add it in. For example, if we were to hit another api to get some information on tide times and a bunch of stateful components adding to the current ones, something like React Context would become a burdon when compared to Redux Toolkit. </p>

<h4>The styling within the stat componenent explained:</h4>
<p>At first <code>style={{ '--color': color, '--bg': bgColor }}</code> can seem a little confusing but it is a simple way to pass styling info through props and apply them as a css variable. (That and no one wants to write actual css inline)</p>

<h4>How much time did I spend on this?</h4>
<p> 3.5 hours. If I had more time I would have made the ui a little nicer with some animations and abit of a polish up. I also would have written some tests to show that the api is acting is expected. I would also do an entire accessability audit to add in aria labels etc making the app as accessible as possible.</p>

<h3>What I did before I started building:</h3>
<p>The first step of this was where I planned how I would build the components and what components can and cannot be re-used along with what would be useful for future additions to the app. This is also the stage where I would write the tests.<p>
<p>I then mocked some designs and reviewed any technical decisions that were pending the design. This is also when I usually pause to review the architecture plans and if there are going to be any shortfalls with that given the current design.</p>
