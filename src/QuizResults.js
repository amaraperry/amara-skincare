import React from 'react';

export function EachProduct(props) {
    
    let combinedBadge = [...props.card.skin, ...props.card.other];
    let allBadges = combinedBadge.map((badge) => {
        return (<span key={badge} className="badge rounded-pill bg-light text-dark same">{badge}</span>)
    })

    return (
        <div className="col-md-3 d-flex mt-3" >
            <div className="card">
                <div className="card-body">
                    <h3 class="routine-step fst-italic">Pick {props.key}</h3>
                    <img src={props.card.img} className="card-img-top" alt={props.card.name} />
                    <h2 className="card-text-brand">{props.card.brand}</h2>
                    <p className="card-text-title">{props.card.name}</p>
                    <p className="card-text-category">{props.card.treatment} {props.card.type}</p>
                    <p className="card-text-price">${props.card.price}</p>
                </div>
                <button class="wishlist btn btn-success btn-sm" type="button">Add to Wishlist</button>
                <div className="card-footer">
                    {allBadges}
                </div>
            </div>
        </div>
    )

}

// takes in props.data? or whatver data set ayesha wants
export function QuizTopPicks(props) {
    let dataBasedOnQuiz = props.data; //subject to change based on quiz results array,
    let productsList = dataBasedOnQuiz.map((item, index) => {
        return (<EachProduct key={index} card={item}/>)
    })

    // cut products list to 4 in array
    productsList = productsList.slice(0, 4);

    return (
        <div>
        <header className="text-center">
            <div className="container">
                <h1 className="page-header">Top Skincare Picks</h1>
                <p className="results-text">See our product suggestions matched based on your quiz results!</p>
            </div>
        </header>

        <section className="all-products">
            <div className="row">
                {productsList}
            </div>
        </section>
    </div>

    )
}

