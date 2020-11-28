import React, { Component } from 'react';
import Pictures from '../../Pictures/index';
import './style.css';

class Portfolio extends Component {
  state = {
    Pictures
  }

  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map((projects, index) => {
        console.log('The INDEX is: ', index);
        return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
            <a target="_blank" href={projects.url} title={projects.title}>
                <img className="project-pics" alt={projects.title} src={this.state.Pictures[index].picture} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
    
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Best Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Portfolio;
