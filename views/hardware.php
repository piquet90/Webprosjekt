<?php

echo <<<_END
<div id="main" class="scroll">

<!-- hwlvl1 -->
<div id="productInfo" class="product">
<h4>Hardware</h4>
<p>Her kan du kjøpe bedre PC-utstyr for å kunne utføre vanskeligere jobber og for å få mer <strong>boost</strong>. Jo mer boost du har, jo kortere tid bruker du på jobben.
<br><br>
10% boost = 10% raskere jobber osv.</p>
</div>


<div class="pspace"> </div>


<!-- hwlvl0 -->
<div class="product">
<h4>IBM 4Kilo</h4>
<img src="img/computer1.jpg" />
<p>En PC du fant i kjellern. Denne hører hjemme på et museum!</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl0" />
<input type="submit" value="$hw0" $hw0disabled>
</form>
</div>



<!-- hwlvl1 -->
<div class="product">
<h4>Asia LAPTOP FLEXI</h4>
<img src="img/computer2.jpg" />
<p>Asian creation of sensation.<br><br>Pris: $1500<br>Boost: 10%</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl1" />
<input type="submit" value="$hw1" $hw1disabled>
</form>
</div>


<div class="pspace"> </div>


<!-- hwlvl2 -->
<div class="product">
<h4>Amsung - $4500</h4>
<p>Lagger akkurat lite nok til å være brukbar.<br><br>Pris: $4500<br>Boost: 20%</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl2" />
<input type="submit" value="$hw2" $hw2disabled>
</form>
</div>


<!-- hwlvl3 -->
<div class="product">
<h4>Dell Latitude</h4>
<img src="img/computer3.jpg" />
<p>En veldig gjennosnittlig laptop.<br><br>Pris: $9000<br>Boost: 30%</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl3" />
<input type="submit" value="$hw3" $hw3disabled>
</form>
</div>


<div class="pspace"> </div>


<!-- hwlvl4 -->
<div class="product">
<h4>Lenovo Thinkpad</h4>
<img src="img/computer4.jpg" />
<p>Klassiske Lenovo Thinkpad.<br><br>Pris: $18000<br>Boost: 40%</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl4" />
<input type="submit" value="$hw4" $hw4disabled>
</form>
</div>



<!-- hwlvl5 -->
<div class="product">
<h4>Macbook Pro</h4>
<img src="img/computer5.jpg" />
<p>Toppspecca Macbook Pro.<br><br>Pris: $34000<br>Boost: 50%</p>



<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl5" />
<input type="submit" value="$hw5" $hw5disabled>
</form>
</div>



<div class="pspace"> </div>



<!-- hwlvl6 -->
<div class="product">
<h4>MLG</h4>
<img src="img/computerMLG.jpg" />
<p>Du har for mye penger!<br><br>Pris: $68000<br>Boost: 60%</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl6" />
<input type="submit" value="$hw6" $hw6disabled>
</form>
</div>

Det kommer mer å bruke penger på senere!





</div>

_END;



?>