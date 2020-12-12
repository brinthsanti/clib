import React from 'react';
import _ from 'lodash';
import Menu from './Menu';
import {FaFolderMinus, FaDesktop, FaDownload, FaRegFileAlt} from "react-icons/fa";
import './App.scss';


const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: FaFolderMinus,
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-11-11-11-11-1",
        icon: FaFolderMinus,
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1_Document-0-1.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: FaDesktop,
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1_Document-0-1.doc",
        icon: FaRegFileAlt,
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: FaRegFileAlt,
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1_Document-0-1.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: FaRegFileAlt,
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: FaDownload,
    title: "Downloads Folder",
    children: [],
  },
];


function App() {
  return (
    <div className="App">
    <div className="container">
    <Menu data={treeData}/>
    </div>
     
       
      <p>test paragraph</p>
    </div>
  );
}

export default App;
