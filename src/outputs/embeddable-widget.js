import React from 'react';
import ReactDOM from 'react-dom';
import Widget from '../components/widget';
// import data from '../components/AutosuggestionField/tmpData';

const data = {};

export default class EmbeddableWidget {
  static el;

  static mount() {
    const component = <Widget data={data}  />;

    function doRender() {
      if (EmbeddableWidget.el) {
        throw new Error('EmbeddableWidget is already mounted, unmount first');
      }
      const el = document.createElement('div');
      el.setAttribute('class', 'bookingpanel');
      const wrap = document.getElementById('widget-wrapper-booking');
      if (!!wrap) {
          wrap.appendChild(el);
      } else {
          document.body.appendChild(el);
      }
      ReactDOM.render(
        component,
        el,
      );
      EmbeddableWidget.el = el;
    }
    if (document.readyState === 'complete') {
      doRender();
    } else {
      window.addEventListener('load', () => {
        doRender();
      });
    }
  }

  static unmount() {
    if (!EmbeddableWidget.el) {
      throw new Error('EmbeddableWidget is not mounted, mount first');
    }
    ReactDOM.unmountComponentAtNode(EmbeddableWidget.el);
    EmbeddableWidget.el.parentNode.removeChild(EmbeddableWidget.el);
    EmbeddableWidget.el = null;
  }
}
