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
<p>A note on state management: I could have used the the react context or something like redux toolkit but there really is no need for this app as it sits right now. It would be worth considering if more features were being planned however.</p>
<p>The styling within the stat componenent explained.</p>
<p>At first <code>style={{ '--color': color, '--bg': bgColor }}</code> can seem a little confusing but it is a simple way to pass styling info through props and apply them as a css variable. (That and no one wants to write actual css inline)</p>
