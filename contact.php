<?php 
require_once('header.php');
 ?>
<div class="header-blog">
	<div class="container">
		<ul>
			<li><a href="#" title="" class="black"><i class="fas fa-home"></i></a></li>
			<li ><a href="#" title="" class="a-orange">Contact Us</a></li>
		</ul>
	</div>
</div>
<div class="contact">
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<div class="blog-category blog">
					<h4>CATEGORIES</h4>
					<p></p>
					<ul>
						<li class="blog-menu-children">
							<a href="#" title="">Fashion</a>
							<ul class="blog-sub-menu">
								<li><a href="#" title="">clothing</a></li>
								<li>
									<a href="#" title="">Accessories</a>
								</li>
								<li><a href="#" title="">Footwear</a></li>
							</ul>
						</li>
						<li><a href="#" title="">Furniture</a></li>
						<li class="blog-menu-children"><a href="#" title="">Electronics</a>
							<ul  class="blog-sub-menu">
								<li><a href="#" title="">Web Cameras</a></li>
								<li><a href="#" title="">Monitors</a></li>
								<li><a href="#" title="">Speakers</a></li>
								<li><a href="#" title="">Printers</a></li>
								<li><a href="#" title="">Scanners</a></li>
							</ul>
						</li>
						<li><a href="#" title="">Sports</a></li>
						<li><a href="#" title="">Featured</a></li>
					</ul>
				</div>
				<div class="blog-img blog">
					<img src="image/images/left-banner-270x340.jpg" alt="">
				</div>
				<div class="blog-category blog">
					<h4>INFORMATION</h4>
					<p></p>
					<ul>
						<li><a href="#" title="">About Our Store</a></li>
						<li><a href="#" title="">Delivery Information</a></li>
						<li><a href="#" title="">Privacy Policy</a></li>
						<li><a href="#" title="">Terms & Conditions</a></li>
						<li><a href="#" title="">Contact Us</a></li>
						<li><a href="#" title="">Site Map</a></li>
					</ul>
				</div>
			</div>
			<div class="col-md-9">
				<h4>CONTACT</h4>
				<h5>Our Location</h5>
				<div id="map">
					<div class="row">
						<div class="col-md-6">
							<ul>
								<li class="contact-img"><img src="image/contact/contact-1.jpg" alt=""></li>
								<li class="contact-title">
									<p>Codezeel</p>
									<p> Address 1</p>
								</li>
							</ul>
							<ul>
								<li class="contact-img"><img src="image/contact/contact-2.jpg" alt=""></li>
								<li class="contact-title">
									<p>Telephone</p>
									<p>123456789</p>
								</li>
							</ul>
						</div>
						<div class="col-md-6">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14898.6171312747!2d105.79968835!3d21.006490949999996!3m2!1i1024!2i768!4f13.1!4m3!3e3!4m0!4m0!5e0!3m2!1svi!2s!4v1518144358901" width="380" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<div id="form">
					<form action="" method="get" accept-charset="utf-8">
						<h5><b>Contact Form</b></h5>
						<div>
							<ul>
								<li class="contact-label">
									<div class="title-cart-mdd">
					                    <p><span>*</span>Your Name</p>
					                </div>
					            </li>
								<li class="contact-input">
									<input type="text" name="" >
								</li>
							</ul>
							<ul>
								<li class="contact-label">
									<div class="title-cart-mdd">
					                    <p><span>*</span>E-Mail Address</p>
					                </div>
					            </li>
								<li class="contact-input">
									<input type="text" name="">
								</li>
							</ul>
							<ul class="text">
								<li class="contact-label">
									<div class="title-cart-mdd">
					                    <p><span>*</span>Enquiry</p>
					                </div>
					            </li>
								<li class="contact-input">
									<textarea name="" ></textarea>
								</li>
							</ul>

						</div>
						
						<button type="submit" class="orange">SUBMIT</button>
							
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<?php 
 	require_once('footer.php');
?>