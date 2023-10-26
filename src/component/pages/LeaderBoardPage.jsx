import React, { useEffect } from "react"
import "./leaderBoard.css"
function LeaderBoard() {
  return (
    <>
    <div id="main">
    <div id="collapsible">Stat selector ▼</div>
    <table>
<thead>
<tr>
<th onclick="sortTable(0)"># <span style={{color: "lightgray"}}>↓</span></th>
<th onclick="sortTable(1)">Player <span style={{color: "lightgray"}}>↕</span></th>
<th onclick="sortTable(2)" id="stat-column">Wins <span style={{color: "lightgray"}}>↕</span></th>
<th onclick="sortTable(3)">Last Update <span style={{color: "lightgray"}}>↕</span></th>
</tr>
</thead>
<tbody><tr class="bodyRow">
                    <td>1</td>
                    <td><a href="/stats/76a73e1707cb49299b3deb9bcafd8ba8">llamaloverbella</a></td>
                    <td>23,800</td>
                    <td>22:21, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>2</td>
                    <td><a href="/stats/3c57402d3fd94ba9abc0e239ac13e2ba">FortuneLemon</a></td>
                    <td>20,051</td>
                    <td>14:04, 19/10/2023</td></tr><tr class="bodyRow">
                    <td>3</td>
                    <td><a href="/stats/76dda03488fb4e598e40126b1a7a140d">Fireblaze74</a></td>
                    <td>16,405</td>
                    <td>05:21, 16/10/2023</td></tr><tr class="bodyRow">
                    <td>4</td>
                    <td><a href="/stats/22f55534c3104b95950991958d47f9ff">Lynx1240</a></td>
                    <td>16,347</td>
                    <td>22:20, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>5</td>
                    <td><a href="/stats/a5146aa32f3a4cb69ddb9e8df891f0cd">BunfieBoo</a></td>
                    <td>15,983</td>
                    <td>22:21, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>6</td>
                    <td><a href="/stats/0b1c18705cf5493c8f910f4581054f26">SourCream_YT</a></td>
                    <td>15,447</td>
                    <td>17:33, 31/08/2023</td></tr><tr class="bodyRow">
                    <td>7</td>
                    <td><a href="/stats/d4a092f3fb3649fb93f2c2cd266e5fbb">knacam</a></td>
                    <td>14,183</td>
                    <td>22:23, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>8</td>
                    <td><a href="/stats/3863e1c33eb342159e45a17f16c0fb4c">Tetrizz</a></td>
                    <td>13,932</td>
                    <td>16:52, 02/09/2023</td></tr><tr class="bodyRow">
                    <td>9</td>
                    <td><a href="/stats/efc10e4ae73c4a3988698fcdb4f31df9">NK53</a></td>
                    <td>13,830</td>
                    <td>22:21, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>10</td>
                    <td><a href="/stats/6ed876e3f8814fc8a13e05405581c46b">AzureBlue</a></td>
                    <td>13,249</td>
                    <td>14:17, 26/08/2023</td></tr><tr class="bodyRow">
                    <td>11</td>
                    <td><a href="/stats/54199f5fa4cc4d6dbbfd79d448e6102a">NeoDarkMaster</a></td>
                    <td>12,943</td>
                    <td>11:43, 09/08/2023</td></tr><tr class="bodyRow">
                    <td>12</td>
                    <td><a href="/stats/e43ea5588d424129a2c59bd2964c3b05">Billowing</a></td>
                    <td>12,165</td>
                    <td>02:46, 24/10/2023</td></tr><tr class="bodyRow">
                    <td>13</td>
                    <td><a href="/stats/2b5287e8e1c04c878852c6877ad6fe2b">Soyla</a></td>
                    <td>11,802</td>
                    <td>17:35, 31/08/2023</td></tr><tr class="bodyRow">
                    <td>14</td>
                    <td><a href="/stats/6a32590ac7c04c2b9ef7d85ef8e99117">Tachifusaguma</a></td>
                    <td>11,370</td>
                    <td>02:40, 24/10/2023</td></tr><tr class="bodyRow">
                    <td>15</td>
                    <td><a href="/stats/5fb90326f8cc45a988b2e2a3de4729bd">R2D2601</a></td>
                    <td>10,792</td>
                    <td>15:22, 14/10/2023</td></tr><tr class="bodyRow">
                    <td>16</td>
                    <td><a href="/stats/368216a95baf4b7797c8c7bd5d38db93">rubben20</a></td>
                    <td>10,507</td>
                    <td>11:31, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>17</td>
                    <td><a href="/stats/425f4b7b888147caa475380dff9e7261">Tachifusagume</a></td>
                    <td>10,254</td>
                    <td>22:22, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>18</td>
                    <td><a href="/stats/d5f1e8d93527410b93db3f293091c2d4">LanderMax</a></td>
                    <td>10,101</td>
                    <td>13:11, 10/08/2023</td></tr><tr class="bodyRow">
                    <td>19</td>
                    <td><a href="/stats/17c7418c12ce43a5add42f7f480e283b">Hawkup13</a></td>
                    <td>10,081</td>
                    <td>05:56, 10/08/2023</td></tr><tr class="bodyRow">
                    <td>20</td>
                    <td><a href="/stats/befdf6f468c84c478809c1f026e3cb1f">GamingGuus</a></td>
                    <td>9,603</td>
                    <td>22:23, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>21</td>
                    <td><a href="/stats/56f05896c27d4f54a409a3b1ed413550">xresto</a></td>
                    <td>9,551</td>
                    <td>22:22, 25/10/2023</td></tr><tr class="bodyRow">
                    <td>22</td>
                    <td><a href="/stats/54c817e5cf51402b9af51e5bffb2406d">Brior</a></td>
                    <td>9,445</td>
                    <td>10:58, 09/08/2023</td></tr><tr class="bodyRow">
                    <td>23</td>
                    <td><a href="/stats/0d711927de2c4910b49a6cb33fe61316">Catpiggy</a></td>
                    <td>9,150</td>
                    <td>00:07, 26/10/2023</td></tr><tr class="bodyRow">
                    <td>24</td>
                    <td><a href="/stats/984da998455a4123948e5466da4d06e2">Elec21</a></td>
                    <td>8,943</td>
                    <td>01:40, 09/08/2023</td></tr><tr class="bodyRow">
                    <td>25</td>
                    <td><a href="/stats/edef537de7da4e4a8fff3621c274b854">N7shadow_</a></td>
                    <td>8,859</td>
                    <td>22:22, 25/10/2023</td></tr></tbody>
</table>
    </div>
      
    </>
  )
}

export default LeaderBoard