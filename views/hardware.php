<?php

echo <<<_END
<div id="main" class="scroll">

<h3>HARDWARE</h3>

<div class="product">
<h4>IBM 4Kilo</h4>

<img src="img/computer1.jpg" />

<p>Laptop from your moms basement. No cooldown on jobs</p>
<input type="submit" value="$hw1" disabled>
</div>

<div class="product">
<h4>Asia LAPTOP FLEXI</h4>

<img src="img/computer2.jpg" />

<p>Asian creation of sensation. 10% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl2" />
<input type="submit" value="$hw2">
</form>
</div>

<div class="product">
<h4>Amsung</h4>


<p>The great amsung. Due to discontinuation of Amsung laptops, this option is no longer available</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl1" />

</form>
</div>

<div class="product">
<h4>Dell Latitude</h4>

<img src="img/computer3.jpg" />

<p>A really average laptop. 25% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl3" />
<input type="submit" value="$hw3">
</form>
</div>

<div class="product">
<h4>Lenovo Thinkpad</h4>

<img src="img/computer4.jpg" />

<p>The classic Lenovo Thinkpad. 30% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl4" />
<input type="submit" value="$hw4">
</form>
</div>


<div class="product">
<h4>Something</h4>



<p>40% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl5" />
<input type="submit" value="$hw5">
</form>
</div>


<div class="product">
<h4>Macbook Pro</h4>

<img src="img/computer5.jpg" />

<p>Top specced Macbook Pro. Money well spent! Not. 50% reduced cooldown on jobs.</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl5" />
<input type="submit" value="$hw5">
</form>
</div>

<div class="product">
<h4>MLG</h4>

<img src="img/computerMLG.jpg" />

<p>bro you sik. 60% cooldown?</p>
<form action="$formpath" method="post"> 
<input type="hidden" name="hwlvl" value="$hwl5" />
<input type="submit" value="$hw5">
</form>
</div>





</div>

_END;



?>