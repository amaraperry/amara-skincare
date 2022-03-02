import React from "react";

export function ComparisonTable() {

    return (
        <div className="row">
            <table className="table table-hover table-bordered align-middle">
                <TableHeader />
                <ComparisonRow />
            </table>
        </div>
    );
}

export function TableHeader() {
  
    return (
        <thead>
        <tr className="text-center">
            <th>
            </th>
            <th className="align-top" scope="col">
                <div>
                    <input class="form-control" list="datalistOptions1"
                        placeholder="Fresh Lotus Youth Preserve Moisturizer"></input>
                    <datalist id="datalistOptions1">
                        <option value="Fresh Lotus Youth Preserve Eye Cream"></option>
                        <option value="Fresh Lotus Youth Preserve Moisturizer"></option>
                        <option value="Fresh Lotus Youth Preserve Rescue Mask"></option>
                    </datalist>
                </div>
                <img src="img/fresh.png" className="img-fluid" alt="The Inkey List Retinol, an Allure 2021 winner"></img>
                <p>Fresh Lotus Youth Preserve</p>
            </th>
            <th className="align-top" scope="col">
                <div>
                    <input class="form-control" list="datalistOptions2"
                        placeholder="The Inkey List Retinol Anti-Aging Serum"></input>
                    <datalist id="datalistOptions2">
                        <option value="The Inkey List Retinol Anti-Aging Serum"></option>
                        <option value="The Inkey List Retinol Eye Cream"></option>
                    </datalist>
                </div>
                <img src="img/inkey.png" className="img-fluid" alt="The Inkey List Retinol, an Allure 2021 winner"></img>
                <p>The InkeyList Retinol Serum</p>
            </th>
        </tr>
    </thead>
    );
  }

  export function ComparisonRow() {

    return (
        <tbody>
                    <tr>
                        <th scope="row"><i className="bi bi-heart"></i>Skin Type</th>
                        <td>Dry, Combination, Normal</td>
                        <td>Dry, Combination, Normal, Oily</td>
                    </tr>
                    <tr>
                        <th scope="row"><i className="bi bi-patch-exclamation"></i>Skin Concern</th>
                        <td>
                            <span className="badge rounded-pill bg-light text-dark same">Aging</span>
                            <span className="badge rounded-pill bg-light text-dark diff1">Dehydrated Skin</span>
                        </td>
                        <td>
                            <span className="badge rounded-pill bg-light text-dark same">Aging</span>
                            <span className="badge rounded-pill bg-light text-dark diff2">Hyperpigmentation</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><i className="bi bi-star"></i>Skin Goals</th>
                        <td className="align-top"><span className="badge rounded-pill bg-light text-dark diff1">Hydration</span></td>
                        <td>
                            <span className="badge rounded-pill bg-light text-dark diff2">Even Tone</span>
                            <span className="badge rounded-pill bg-light text-dark diff2">Minimize Redness</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><i className="bi bi-droplet"></i>Ingredient Preferences</th>
                        <td>
                            <span className="badge rounded-pill bg-light text-dark same">Paraben-free</span>
                            <span className="badge rounded-pill bg-light text-dark same">Fragrance-free</span>
                            <span className="badge rounded-pill bg-light text-dark diff1">Sulfate-free</span>
                        </td>
                        <td className="align-top">
                            <span className="badge rounded-pill bg-light text-dark same">Paraben-free</span>
                            <span className="badge rounded-pill bg-light text-dark same">Fragrance-free</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><i className="bi bi-currency-dollar"></i>Price</th>
                        <td>$52</td>
                        <td>$18</td>
                    </tr>
                </tbody>
    );
  }