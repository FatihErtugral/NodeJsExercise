import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import moment from 'moment';

export class ChatText extends Component {
   constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
      this.state = {
         text: "",
         scrollBottom: true
      }
      this.inter=null;
   }
   componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener('scroll', this.handleScroll);
      let i = 0;
      this.inter = setInterval(() => {
         let time = new Date();
         this.setState({ text: this.state.text +`\n[${moment(time).format('HH:mm:ss')}] <nick> Lorem, ipsum dolor sit amet consectetur adipisicing elit. ${i} \n`});
         i++;

         if (this.state.scrollBottom) {
            let x = ReactDOM.findDOMNode(this);
            console.log(x.scrollTop);
            console.log(x.scrollHeight - x.clientHeight);
            x.scrollTo(0, x.scrollHeight - x.clientHeight);
         }
      }, 500);

   }

   componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener('scroll', this.handleScroll);
      clearInterval(this.inter);
   }
   componentDidUpdate() {
      //console.log('update');
   }

   handleScroll(e) {
      e.preventDefault();
      console.log(e);
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      if (scrollTop + clientHeight + (scrollHeight / 10) >= scrollHeight)
         this.setState({ scrollBottom: true })
      else
         this.setState({ scrollBottom: false })

   }

   render() {
      return (
         <textarea readOnly={true} value={this.state.text} id="fatih"
            style={{
               margin: "0", padding: "0",
               scrollSnapType: "both proximity",
               backgroundColor: "initial",
               color: "white", resize: "none",
               width: "100%",
               overflowY: "scroll",
               overflowX: "hidden",
               border:"none"
            }}>
         </textarea>
      );
   }
}