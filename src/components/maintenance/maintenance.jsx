import React, { useEffect, useState } from "react";
import './maintenance.css'
import axios from "axios";
import { HashLoader } from "react-spinners";

function  Maintenance() {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h4 class="text-center "> 503 Under Development</h4>


                            </div>
                            <div class="contant_box_404">
                                <a href="/" class="link_404">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Maintenance