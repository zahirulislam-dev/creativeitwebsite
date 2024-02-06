import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='bg-gray-200 py-[50px] xl:py-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='mb-[15px] rounded'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography sx={{ width: '10%', flexShrink: 0 }} className='font-pops font-bold text-[20px] text-black'>1</Typography>
              <Typography sx={{ color: 'text.secondary' }} className='font-pops font-bold text-[20px] text-black '>Is there any limit of server space included with the package?</Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography className='font-pops font-bold text-[20px] text-black'>
                There is no limit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>2</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I use my own domain if I want?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              An additional fee of BDT. 3000 / - will be applicable.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                3
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Are there any server space limits for using the software?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              No, There is no limit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                4
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I use my own server if I want?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              No. There is no opportunity to host anywhere other than our server.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                5
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I use my own domain?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              Yes, Software price will increase by 25% for using own domain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                6
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I implement this software on another server?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              No. our code can’t be implemented on different server(other then our own server).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                7
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I switch to other software at any time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              Yes, Backup data will be provided in PDF and Excel format.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                8
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              If you want to move from other software to Explore IT, can you move with existing data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              Some data may be transferred within subject to negotiation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                9
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Is the SMS fee included in the package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              No. Additional charges will be apply for SMS.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                10
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Can I move from monthly package to yearly package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              Yes, You can move but full charge of annual package will be applicable during moving process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                11
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              How can I work if there is no internet connection ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              Work can be done from mobile hotspot or mobile, no work can be done offline. If necessary, manually bill it and input it later.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className='mb-[15px]'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '10%', flexShrink: 0 }}>
                12
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
              Whether any feature can be added to the software if desired?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className='border-t'>
              <Typography>
              We will add any relevant features.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq