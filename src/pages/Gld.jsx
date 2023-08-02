import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Gld = () => {
  return (
    <div className="main-layout">
      <header>
        <div className="header">
          <div className="white_bg">
            <Header />
            <section className="table-responsive">
              <table
                id="maintable"
                className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 display compact cell-border"
                cellSpacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Report Title</th>
                    <th>Filiere/Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="cssFont_1">am happy</p>
                    </td>
                    <td>
                      <p className="cssFont_2">
                        Director deg dihd did didididid ididiidqew qdipojhiyga osqhigyudq dqogdygyv
                      </p>
                    </td>
                    <td>
                      <p className="cssFont_1">
                        <Link to="https://docs.google.com/presentation/d/1i6BT0tioldmFYNhte4H8QneeNZna3emo/edit?usp=sharing&ouid=101826865887774610139&rtpof=true&sd=true">
                          New York
                        </Link>
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Author</th>
                    <th>Report Title</th>
                    <th>Filiere/Title</th>
                  </tr>
                </tfoot>
              </table>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Gld;
