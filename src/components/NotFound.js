import { Link } from "react-router-dom";

function NotFound(){
   return(
      <section class="container">
		<div class="page404Wrap">
			<img src="images/404.png" alt="Francoise img" />
			<p>The requested page has <br /> not been found</p>
			<Link to="/Home" class="homePageLink">homepage</Link>
		</div>
		<div class="clear"></div>
		<div class="ourInstagram">
			<div id="sb_instagram">
				<div class="sb_instagram_header">
					<a href="#" class="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div class="sbi_item sbi_type_image">
						<div class="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="images/content/inst.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div class="sbi_item sbi_type_image">
						<div class="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="images/content/inst2.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div class="sbi_item sbi_type_image">
						<div class="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="images/content/inst3.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div class="sbi_item sbi_type_image">
						<div class="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="images/content/inst4.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
					<div class="sbi_item sbi_type_image">
						<div class="sbi_photo_wrap">
							<a href="#" class="sbi_photo">
								<img src="images/content/inst5.jpg" alt="Francoise img" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   )
}
export default NotFound;