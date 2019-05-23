import React from 'react';
import SplitPane from 'react-split-pane';
import { ChatList } from './ChatList.jsx';
import { ChatText } from './ChatTextBox.jsx';
import { ChatInput } from './ChatInput.jsx';

export const Deneme = () => {
   const stylePane = { overflowX: "hidden", minHeight: "0" }
   return (
      <div style={{
         height: '80vh',
         margin:"15px",
         width: '90%',
         position: 'relative',
         border:"1px solid black",
         background:"#272727",
         color:"white" }}>
         <SplitPane
            split="vertical"
            minSize={50}
            maxSize={500}
            defaultSize={140}
            paneStyle={stylePane}
            pane1Style={stylePane}
            pane2Style={stylePane}
            primary="first">
            <ChatList />
            <SplitPane
               split="horizontal"
               minSize={50}
               maxSize={'90%'}
               defaultSize={'80%'}
               pane1Style={stylePane}
               pane2Style={stylePane}
               primary="first"
            >
            <ChatText/>
            <ChatInput/>
            </SplitPane>
         </SplitPane>
      </div>
   );
}
