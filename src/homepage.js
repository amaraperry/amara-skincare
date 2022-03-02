import React from "react";

export function Homepage() {
    return (
        <div>
        <NavBar />
        <Header />
        <Main />
        <Footer />
        </div>

    )
}

export function NavBar () {

    const navData = [
        { "id" : 1, "name" : "Home", "url" : "" },
        { "id" : 2, "name" : "Quiz", "url" : "" },
        { "id" : 3, "name" : "Quiz Results", "url" : "" },
        { "id" : 4, "name" : "Products", "url" : "" },
        { "id" : 5, "name" : "Compare", "url" : "" }
    ]

    const navInfo = navData.map((eachPage) => {
        <li className="nav-item active">
            <a className="nav-link" href={navData.url}>{navData.name} <span className="sr-only"></span></a>
        </li>
    })

    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src="/img/logo.png" height="40px" alt="logo of honeydew"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {navInfo}
                    </ul>
                </div>
            </nav>
    )
}

 
export function Header () {
    return (
        <div>
            <header className="homepage-header">
                <div className="container">
                    <h1 className="homepage-h1">SkinCare</h1>
                    <p className="lead">Be confident of your skin.</p>
                </div>
            </header>
        </div>
    )
}


export function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <p className="footer-contact">Contact Us</p>
                    <p><a href="mailto:skincare@honeydew.com"><span className="material-icons">email</span> skincare@honeydew.com</a></p>
                    <p><a href="tel:206-765-4321"><span class="material-icons">phone</span> 206-765-4321</a></p>
                    <p>&copy; Honeydew 2022</p>
                </div>
            </footer>
        </div>

    )
}

    // const stepData = [
    //     {"id" : 1, "name" : "Step 1", "image" : "img/quiz.jpeg", "alt" : "quiz", 
    //     "linkText1" : "Take self-assessment", "linkText2" : " quiz", "h3Text" : "to identify your skin condition.",
    //     "pText" : "A thorough skin assessment gives you important information about potentially serious diseases, especiallyin older adults who are vulnerable to skin breakdown."},
    //     {"id" : 2, "name" : "Step 2", "image" : "img/search.png", "alt" : "a couple Allure 2021 winner products", 
    //     "linkText1" : "Take self-assessment", "linkText2" : " quiz", "h3Text" : "to identify your skin condition.",
    //     "pText" : "A thorough skin assessment gives you important information about potentially serious diseases, especiallyin older adults who are vulnerable to skin breakdown."},

    //     {}
    // ]


export function Main () {

    return (
        <main>
            <div class="container row HP-main">
    
                {/* first step */}
                <div class="paddings">
        
                    <h2>Step 1</h2>
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <img class="homepage-img" src="/img/quiz.jpeg" alt="quiz image" />
                        </div>
            
                        <div class="col-lg-6">
                            <h3>Take self-assessment<a class="homepage-a" href="../project-skincare-proposal/quiz.html"> quiz</a></h3>
                            <h3>to identify your skin condition.</h3>
                            <p>A thorough skin assessment gives you important information about potentially serious diseases, especially
                            in older adults who are vulnerable to skin breakdown.</p>
                        </div>
                    </div>
        
                </div>
        
                {/* second step */}
                <div class="paddings">
                    <h2>Step 2</h2>
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <h3><a class="homepage-a" href="../project-skincare-proposal/products.html">Search</a> for suitable products.</h3>
                            <p>Choose According To Your Skin. You can only seek out the best skin care products if you know your skin
                            type. Thus, figuring out whether you have a normal, dry, oily, or sensitive skin is the first step on your
                            journey of revamping your skincare regime. Then, use our tool to find out which product is best for you.
                            </p>
                        </div>
            
                        <div class="col-lg-6">
                            <img class="homepage-img" src="/img/search.png" alt="a couple Allure 2021 winner products" />
                        </div>
                    </div>
                </div>
        
        
        
                {/* third step */}
                <div class="paddings">
        
                    <h2 class="pb-3">Step 3</h2>
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <img class="homepage-img" src="/img/compare.png" alt="product comparison table" />
                        </div>
                        <div class="col-lg-6">
            
                            <h3><a class="homepage-a" href="../project-skincare-proposal/productcompare.html">Compare</a> the suggested products</h3>
                            <h3>to identify your skin conditions.</h3>
                            <p>Try to find different products for yourself. Comparison tool helps you learn directly about the
                            differnces among products. Even if you are just looking to slow aging or alleviate dry skin, you could
                            consider using multiple facial creams at different times of the day or week, including one that contains
                            sunblock. If done correctly, you can get better results from your favorite creams by alternating
                            additional products.</p>
                        </div>
                    </div>
        
                </div>
        
        
                </div>
  
        </main>
  
    )
}

   