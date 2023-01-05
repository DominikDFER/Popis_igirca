import React from 'react';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
        <button id="button" > 
           <a rel="datatable" href="index.html">
              Index
        </a>
       </button>
       <table class="table table-bordered table-hover table-condensed" >
        <thead><tr><th title="Field #1">name</th>
        <th title="Field #2">žanr</th>
        <th title="Field #3">publisher</th>
        <th title="Field #4">voice_chat</th>
        <th title="Field #5">review</th>
        <th title="Field #6">pg_rating</th>
        <th title="Field #7">price</th>
        <th title="Field #8">singleplayer_multiplayer_or_both</th>
        <th title="Field #9">time_to_complete</th>
        <th title="Field #10">Voice_Actors name</th>
        <th title="Field #11">Voice_Actors surname</th>
        </tr></thead>
        <tbody><tr>
        <td>Red dead redemption 2</td>
        <td>Vestern</td>
        <td>Rockstar games</td>
        <td>yes</td>
        <td>very positive</td>
        <td align="right">0</td>
        <td align="right">60</td>
        <td>both</td>
        <td align="right">49</td>
        <td>Roger</td>
        <td>Clark</td>
        </tr>
        <tr>
        <td>Star Wars Battlefron 2</td>
        <td>Shooter</td>
        <td>Electronic Arts</td>
        <td>yes</td>
        <td>very positive</td>
        <td align="right">16</td>
        <td align="right">40</td>
        <td>both</td>
        <td align="right">57</td>
        <td>Benjamin Byron</td>
        <td>Davis</td>
        </tr>
        <tr>
        <td>League of Legends</td>
        <td>MOBA</td>
        <td>Riot Games</td>
        <td>yes</td>
        <td>positive</td>
        <td align="right">10</td>
        <td align="right">0</td>
        <td>both</td>
        <td align="right">0</td>
        <td>Janina</td>
        <td>Gavankar</td>
        </tr>
        <tr>
        <td>Dead by Daylight</td>
        <td>Action</td>
        <td>Behaviour Interactive Inc.</td>
        <td>no</td>
        <td>very positive</td>
        <td align="right">18</td>
        <td align="right">0</td>
        <td>multiplayer</td>
        <td align="right">0</td>
        <td>Matthew</td>
        <td>mercer</td>
        </tr>
        <tr>
        <td>Grand Theft Auto 5</td>
        <td>Action</td>
        <td>Rockstar Games</td>
        <td>no</td>
        <td>very positive</td>
        <td align="right">18</td>
        <td align="right">24</td>
        <td>both</td>
        <td align="right">31</td>
        <td>JB</td>
        <td>Blanc</td>
        </tr>
        <tr>
        <td>Transistor</td>
        <td>Action</td>
        <td>Supergiant Games</td>
        <td>no</td>
        <td>very positive</td>
        <td align="right">12</td>
        <td align="right">17</td>
        <td>singleplayer</td>
        <td align="right">15</td>
        <td>Melissa</td>
        <td>Hutchison</td>
        </tr>
        <tr>
        <td>Hades</td>
        <td>RPG</td>
        <td>Supergiant Games</td>
        <td>no</td>
        <td>overwhelmingly positive</td>
        <td align="right">0</td>
        <td align="right">21</td>
        <td>singleplayer</td>
        <td align="right">23</td>
        <td>Dylan</td>
        <td>Kushner</td>
        </tr>
        <tr>
        <td>Dota 2</td>
        <td>MOBA</td>
        <td>Valve</td>
        <td>no</td>
        <td>mostly positive</td>
        <td align="right">0</td>
        <td align="right">0</td>
        <td>multiplayer</td>
        <td align="right">0</td>
        <td>Emelina </td>
        <td> Mårtensson</td>
        </tr>
        <tr>
        <td>The Legend of Zelda: Breath of the Wild</td>
        <td>Action-adventure</td>
        <td>Nitendo</td>
        <td>no</td>
        <td>very positive</td>
        <td align="right">10</td>
        <td align="right">60</td>
        <td>singleplayer</td>
        <td align="right">50</td>
        <td>Ned</td>
        <td>Luke</td>
        </tr>
        <tr>
        <td>World of Tanks</td>
        <td>Vehicular combat</td>
        <td>Wargaming</td>
        <td>yes</td>
        <td>very positive</td>
        <td align="right">7</td>
        <td align="right">0</td>
        <td>multiplayer</td>
        <td align="right">0</td>
        <td>Shawn</td>
        <td>Fonteno</td>
        </tr>
        </tbody></table>
           <br/>
           <br/>
    <div>
        <select name="ddlContent" id="ddlContent" onchange="SelectedTextValue(this)">
            <option value="Nothing">select</option>
            <option value="1">wildcard</option>
            <option value="2">name</option>
            <option value="3">publisher</option>
        </select>
    <input type="text"  id="myinput" placeholder="input"/>   
    <input type="button" value="Search" onclick="tableSearch()" />
    <table id="table">
      
    </table>
    </div>
<script  src="filter.js"></script>
<script  src="exportJSON.js"></script>
<script  src="exportCSV.js"></script>
<script  src="db.js"></script>
  </div>
);

export default Hero;
