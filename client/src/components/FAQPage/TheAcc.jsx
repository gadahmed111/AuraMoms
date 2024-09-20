/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  const accordionData = [
    { title: 'Title 1', content: 'Description 1' },
    { title: 'Title 2', content: 'Description 2' },
    { title: 'Title 3', content: 'Description 3' },
    { title: 'Title 4', content: 'Description 4' },
    { title: 'Title 5', content: 'Description 5' },
    { title: 'Title 6', content: 'Description 6' },
    { title: 'Title 7', content: 'Description 7' },
    { title: 'Title 8', content: 'Description 8' },
    { title: 'Title 9', content: 'Description 9' },
    { title: 'Title 10', content: 'Description 10' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 dark:bg-gray-900 text-white">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          className="bg-gray-800 border border-gray-700"
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <div className="flex justify-between items-center w-full">
              <Typography className="font-semibold">{item.title}</Typography>
              <div className="flex items-center">
                <span className="text-white mx-2">↓</span>
                <ExpandMoreIcon className="text-white" />
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
