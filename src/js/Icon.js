import React from 'react';

const Checkmark = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
  </svg>
);

const Close = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
  </svg>
);

const Minus = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
);

const Plus = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
);

const ChevronLeft = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
  </svg>
);

const Facebook = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M18,5H15.5C13.57,5 12,6.57 12,8.5V11H10V14H12V21H15V14H18V11H15V9C15,8.45 15.45,8 16,8H18V5Z" />
  </svg>
);

const Google = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
  </svg>
);

const Settings = props => (
  <svg viewBox="0 0 24 24">
    <path d="M9,4A4,4 0 0,0 5,8A4,4 0 0,0 9,12A4,4 0 0,0 13,8A4,4 0 0,0 9,4M9,14C6.33,14 1,15.33 1,18V20H12.08C12.03,19.67 12,19.34 12,19C12,17.5 12.5,16 13.41,14.8C11.88,14.28 10.18,14 9,14M18,14C17.87,14 17.76,14.09 17.74,14.21L17.55,15.53C17.25,15.66 16.96,15.82 16.7,16L15.46,15.5C15.35,15.5 15.22,15.5 15.15,15.63L14.15,17.36C14.09,17.47 14.11,17.6 14.21,17.68L15.27,18.5C15.25,18.67 15.24,18.83 15.24,19C15.24,19.17 15.25,19.33 15.27,19.5L14.21,20.32C14.12,20.4 14.09,20.53 14.15,20.64L15.15,22.37C15.21,22.5 15.34,22.5 15.46,22.5L16.7,22C16.96,22.18 17.24,22.35 17.55,22.47L17.74,23.79C17.76,23.91 17.86,24 18,24H20C20.11,24 20.22,23.91 20.24,23.79L20.43,22.47C20.73,22.34 21,22.18 21.27,22L22.5,22.5C22.63,22.5 22.76,22.5 22.83,22.37L23.83,20.64C23.89,20.53 23.86,20.4 23.77,20.32L22.7,19.5C22.72,19.33 22.74,19.17 22.74,19C22.74,18.83 22.73,18.67 22.7,18.5L23.76,17.68C23.85,17.6 23.88,17.47 23.82,17.36L22.82,15.63C22.76,15.5 22.63,15.5 22.5,15.5L21.27,16C21,15.82 20.73,15.65 20.42,15.53L20.23,14.21C20.22,14.09 20.11,14 20,14M19,17.5A1.5,1.5 0 0,1 20.5,19A1.5,1.5 0 0,1 19,20.5C18.16,20.5 17.5,19.83 17.5,19A1.5,1.5 0 0,1 19,17.5Z" />
  </svg>
);

const Pencil = props => (
  <svg viewBox="0 0 24 24">
    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
  </svg>
);

const CircleFilled = props => (
  <svg viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
);

const CircleOutline = props => (
  <svg viewBox="0 0 24 24">
    <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
);

const ThumbsUp = props => (
  <svg viewBox="0 0 24 24">
    <path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V10.09L23,12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
  </svg>
);
export {
  Checkmark,
  Close,
  Minus,
  Plus,
  ChevronLeft,
  Facebook,
  Google,
  Settings,
  Pencil,
  CircleFilled,
  CircleOutline,
  ThumbsUp
};
