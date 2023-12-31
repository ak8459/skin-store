
let navbar = () => {
    return `
    <a href="#"><div id="go_top"><i class="fa-solid fa-angles-up"></i></div></a>
    <div id="nrow1" class="n np ndf ndp">
        <div class="np nmr"><a href="#"><i class="fa-solid fa-globe"></i> us-USD</a></div>
        <div class="np"><a href="#">Help</a></div>
    </div>
    <div id="nrow2" class="n">
        <div id="hover_off" class="ndf ndp">
            <div><a href="./index.html"><img src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="company logo"></a></div>
            <div id="nsearch">
                <input id="search_tag" type="text"> <i id="search_icon" class="fa-solid fa-magnifying-glass"></i>
                <div id="search_data"></div>
                <button id="search_delete"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="naccount">
                <a href="./login.html">
                    <i class="fa-solid fa-user"></i>
                    <span>Account</span>
                </a>
                <div id="account_hover"></div>
            </div>
            <div id="ncart">
                <a href="./cart.html">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    <span>Cart</span>
                </a>
                <div id="cart_qty">0</div>
                <div id="cart_hover"></div>
            </div>
        </div>
        <hr id="hover_off">
        <div id="ncategory" class="ndf ndp hov">
            <div id="brands">Brands</div>
            <div id="summer_shop">Summer Shop</div>
            <div id="sale">Sale</div>
            <div id="build_a_routine">Build a Routine</div>
            <div id="skin_care">Skin Care</div>
            <div id="hair">Hair</div>
            <div id="makeup">Makeup</div>
            <div id="tools">Tools</div>
            <div id="bath_body">Bath & Body</div>
            <div id="self_care">Self-Care</div>
            <div id="fragrance">Fragrance</div>
            <div id="new_trending">New & Trending</div>
            <div id="advice">Advice</div>
        </div>
        <div id="hover_category"></div>
    </div>
    <div id="nrow3" class="n ndf">
        <div><a href="#"><i class="fa-solid fa-truck"></i> FREE US Shipping Over $49</a></div>
        <div><a href="./refer.html"><i class="fa-solid fa-sack-dollar"></i> Refer a Friend, Get $15</a></div>
        <div><a href="#"><i class="fa-solid fa-piggy-bank"></i> New Customers Save 20% - Use Code NEWBIE</a></div>
        <div><a href="./friend.html"><i class="fa-solid fa-mobile"></i> Download Our App</a></div>
    </div>
    <div id="nrow4" class="n"><a href="#">15% off or 20% off when you spend $150+ with code SAVE20 + 16-Piece Beauty Bag (Worth $174) @ $150 | SHOP NOW ></a></div>
    `
}
let footer = () => {
    return `
    <footer>
        <div id="footer">
            <hr>
            <div id="frow1" class="fdf fdp">
                <div id="fr1c1">
                    <div>
                        <p>Sign up to our email list and receive 20% off your next order</p>
                        <a href="./register.html"><button id="signup_button">SIGN UP</button></a>
                    </div>
                    <hr>
                    <div class="fhov">
                        <label for="">Help & Information</label>
                        <div><i class="fa-solid fa-phone"></i><a href="#">Customer Service</a></div>
                        <div><i class="fa-solid fa-truck"></i><a href="#">Delivery Information</a></div>
                        <div><i class="fa-solid fa-arrow-rotate-left"></i><a href="#">Returns & Refunds</a></div>
                        <div><i class="fa-solid fa-question"></i><a href="#">Help Center</a></div>
                        <div><i class="fa-solid fa-arrows-to-circle"></i><a href="#">Track my order</a></div>
                        <div><i class="fa-brands fa-accessible-icon"></i><a href="#">Accessibility</a></div>
                        <div><i class="fa-solid fa-cookie"></i><a href="#">Cookie Settings</a></div>
                    </div>
                </div>
                <div id="fr1c2">
                    <div>
                        <p>Connect with us</p>
                        <div>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-snapchat"></i>
                        </div>
                    </div>
                    <div id="fm" class="fdf">
                        <div>
                            <hr>
                            <label for="">About SkinStore</label>
                            <div><a href="#">Key Workers Discount</a></div>
                            <div><a href="./aboutus.html">About Us</a></div>
                            <div><a href="#">Affiliate Program</a></div>
                            <div><a href="#">Brand Directory</a></div>
                            <div><a href="#">Coupon Codes</a></div>
                            <div><a href="./refer.html">Refer A Friend</a></div>
                            <div><a href="#">Student Discount</a></div>
                            <div><a href="#">Join SkinStore Experts</a></div>
                        </div>
                        <div>
                            <hr>
                            <label for="">Legal</label>
                            <div><a href="#">Cookie Information</a></div>
                            <div><a href="#">Privacy Policy</a></div>
                            <div><a href="#">Terms & Conditions</a></div>
                            <div><a href="#">Modern Slavery Statement</a></div>
                        </div>
                        <div>
                            <hr>
                            <label for="">How To Contact Us</label>
                            <div><a href="#">Message Us</a></div>
                            <div><a href="#">Free Beauty Consultations</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="frow2" class="fdf fdp">
                <div>
                    <h1>THG</h1>
                    <p>2022 © The Hut.com Ltd.</p>
                </div>
                <div>
                    <p>Pay securely with</p>
                    <div id="flogo">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRU5EwiLIR5zXa2DJwiDjBkBzV_-MgF4_Ca0inuEGojXgd8ylwX" alt="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgq9Qv5nr4iAofJK2XXHUnQj2lairgNsBeNzFiaATT2_MDyXwH" alt="">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJI9gwO-nF0r9DmsRekT0gAUedK0TS6BCo_I7DbrKcRcCJzdHY" alt="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREOOmQwUw2IDL61UatUIFZIprcc_5bRFVsUtGcxzCCAagRU8H" alt="">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIgucSXvrizZZFz5U4JROBimmZ8QWouQRKmhF2g5Y2f6MwtOnJ" alt="">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR12RuKtQi8QqArAncl9OZdPzD3TJzvvuyNI-LPfVuTe_aDfKM-" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
}

export {navbar, footer};
