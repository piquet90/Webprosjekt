<?php

echo <<<_END
<div id="main" class="scroll">

<!-- hwlvl1 -->
<div id="productInfo" class="product">
<h4>Hardware</h4>
<p>Here you can upgrade your computer for a shorter cooldown on jobs and unlocking harder jobs</p>
</div>


<div class="pspace"> </div>


<!-- hwlvl0 -->
<div class="product">
<h4>IBM 4Kilo</h4>
<img src="img/computer1.jpg" />
<p>Laptop from your moms basement. Can you even code on this?</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl0" />
<input type="submit" value="$hw0" $hw0disabled>
</form>
</div>


<!-- hwlvl1 -->
<div class="product">
<h4>Asia LAPTOP FLEXI - $1500</h4>
<img src="img/computer2.jpg" />
<p>Asian creation of sensation. 10% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl1" />
<input type="submit" value="$hw1" $hw1disabled>
</form>
</div>

<div class="pspace"> </div>


<!-- hwlvl2 -->
<div class="product">
<h4>Amsung - $4500</h4>
<p>The great amsung. Due to discontinuation of Amsung laptops, this option is no longer available</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl2" />
<input type="submit" value="$hw2" $hw2disabled>
</form>
</div>

<!-- hwlvl3 -->
<div class="product">
<h4>Dell Latitude - $9000</h4>
<img src="img/computer3.jpg" />
<p>A really average laptop. 25% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl3" />
<input type="submit" value="$hw3" $hw3disabled>
</form>
</div>

<div class="pspace"> </div>

<!-- hwlvl4 -->
<div class="product">
<h4>Lenovo Thinkpad - $18000</h4>
<img src="img/computer4.jpg" />
<p>The classic Lenovo Thinkpad. 30% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl4" />
<input type="submit" value="$hw4" $hw4disabled>
</form>
</div>



<!-- hwlvl5 -->
<div class="product">
<h4>Macbook Pro - $34000</h4>
<img src="img/computer5.jpg" />
<p>Top specced Macbook Pro. Money well spent! Not. 50% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl5" />
<input type="submit" value="$hw5" $hw5disabled>
</form>
</div>

<div class="pspace"> </div>

<!-- hwlvl6 -->
<div class="product">
<h4>MLG - $68000</h4>
<img src="img/computerMLG.jpg" />
<p>bro you sik. 60% cooldown?</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl6" />
<input type="submit" value="$hw6" $hw6disabled>
</form>
</div>





</div>

_END;



?>