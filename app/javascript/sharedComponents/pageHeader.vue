<template>
  <header id="navigation">
    <div class="navbar navbar-expand-lg" role="banner">
      <div class="container">
        <a class="secondary-logo" href="index.html">
          <img class="img-fluid" src="assets/logo.png" alt="logo">
        </a>
      </div>
      <div class="topbar">
        <div class="container">
          <div id="topbar" class="navbar-header">
            <a class="navbar-brand" href="index.html">
              <img class="main-logo img-fluid" src="assets/logo.png" alt="logo">
            </a>
            <div id="topbar-right">
              <div class="dropdown language-dropdown">
                <a data-toggle="dropdown" href="#"><span class="change-text">VI</span> <i class="fa fa-angle-down"></i></a>
                <ul class="dropdown-menu language-change">
                  <li><a href="#">VI</a></li>
                  <li><a href="#">EN</a></li>
                </ul>
              </div>
              <div id="date-time"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="menubar" class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa fa-align-justify"></i></span>
        </button>
        <a class="navbar-brand d-lg-none" href="index.html">
          <img class="main-logo img-fluid" src="assets/logo.png" alt="logo">
        </a>
        <nav id="mainmenu" class="navbar-left collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="home dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Home</a>
              <ul class="dropdown-menu">
                <li><a href="index.html">Home Default</a></li>
                <li><a href="index2.html">Home Style Two</a></li>
                <li><a href="index3.html">Home Style Three</a></li>
                <li><a href="index4.html">Home Style Four</a></li>
                <li><a href="index5.html">Home Style Five</a></li>
                <li><a href="index1.html">Home Style Six</a></li>
              </ul>
            </li>
            <li class="business dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Business</a>
              <ul class="dropdown-menu">
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
              </ul>
            </li>
            <li class="politics dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Politics</a>
              <ul class="dropdown-menu">
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
                <li><a href="#">Dropdown Demo</a></li>
              </ul>
            </li>
            <li class="sports"><a href="listing-sports.html">Sports</a></li>
            <li class="health"><a href="listing.html">Health</a></li>
            <li class="entertainment"><a href="listing.html">Entertainment</a></li>
            <li class="lifestyle"><a href="listing-life-style.html">Lifestyle</a></li>
            <li class="more dropdown"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">Pages +</a>
              <ul class="dropdown-menu">
                <li><a href="news-details.html">News Details</a></li>
                <li><a href="listing.html">Category Listing</a></li>
                <li><a href="listing-life-style.html">Category Lifestyle</a></li>
                <li><a href="listing-sports.html">Category Sports</a></li>
                <li><a href="404.html">404 Error</a></li>
                <li><a href="author-listing.html">Author Listing <span class="badge">New</span></a></li>
                <li><a href="author-details.html">Author Details <span class="badge">New</span></a></li>
                <li><a href="about-us.html">About Us <span class="badge">New</span></a></li>
                <li><a href="contact-us.html">Contact Us <span class="badge">New</span></a></li>
                <li><a href="contact-us2.html">Contact Us Two <span class="badge">New</span></a></li>
                <li><a href="signup.html">Sign Up Page<span class="badge">New</span></a></li>
                <li><a href="signin.html">Sign In page<span class="badge">New</span></a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="searchNlogin">
          <ul>
            <li class="search-icon"><i class="fa fa-search"></i></li>
            <li class="dropdown user-panel"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i></a>
              <div class="dropdown-menu top-user-section">
                <div class="top-user-form">
                  <form id="top-login" role="form">
                    <div class="input-group" id="top-login-username">
                      <span class="input-group-addon"><img src="assets/user-icon.png" alt="Image" /></span>
                      <input type="text" class="form-control" placeholder="Username" required="">
                    </div>
                    <div class="input-group" id="top-login-password">
                      <span class="input-group-addon"><img src="assets/password-icon.png" alt="Image" /></span>
                      <input type="password" class="form-control" placeholder="Password" required="">
                    </div>
                    <div>
                      <p class="reset-user">Forgot <a href="#">Password/Username?</a></p>
                      <button class="btn btn-danger" type="submit">Login</button>
                    </div>
                  </form>
                </div>
                <div class="create-account">
                  <a href="#">Create a New Account</a>
                </div>
              </div>
            </li>
          </ul>
          <div class="search">
            <form role="form">
              <input type="text" class="search-form" autocomplete="off" placeholder="Type & Press Enter">
            </form>
          </div> <!--/.search-->
        </div><!-- searchNlogin -->
      </div>
    </div>
  </header><!--/#navigation-->
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>
