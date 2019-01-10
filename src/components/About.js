import React, { Component } from "react";
import classNames from "classnames";

import classes from "./About.module.scss";

export default class About extends Component {
  render() {
    return (
      <section>
        <div className={classNames("container", classes.grid)}>
          <header>
            <h2 className="title">About</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium fugit nihil
            necessitatibus eveniet adipisci quae nulla accusamus iste provident, qui omnis, optio
            eos corporis ab. Eum assumenda ducimus distinctio, quasi voluptas nostrum qui illum
            quibusdam ex quae dolorem iste facilis nam exercitationem nesciunt laboriosam ab
            possimus officiis architecto. Dolorum tenetur harum quasi molestiae. Commodi vero
            incidunt sequi error. Sint voluptas expedita nihil iure quibusdam consectetur
            praesentium! Enim est magni quaerat eligendi, tempore maxime autem ratione quae ipsa
            quam. Doloribus soluta ducimus aperiam earum autem accusamus tempora obcaecati quia
            molestiae quibusdam. Fugiat deleniti vel similique, error amet ducimus id ut?
          </p>
        </div>
      </section>
    );
  }
}
