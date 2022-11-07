import {FC} from 'react'
import { Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface FooterProps {
    contactUs:string;
}

export const ContactSocialMedia: FC<FooterProps> = ({ contactUs }) => {
  return (
    <>  
        <Button 
            variant="contained" 
            size="large" 
            fullWidth 
            color="secondary"
            sx={{
                mb: 3,
                fontSize: {xs: '0.8rem', xl: '1rem'}
            }}
            href="#"
            target="_blank"
        >
            {contactUs}
        </Button>
        <IconButton className="text-color" href="#" target="_blank">
            <FacebookIcon />
        </IconButton>
        <IconButton className="text-color" href="#" target="_blank">
            <InstagramIcon />
        </IconButton>
        <IconButton className="text-color" href="#" target="_blank">
            <TwitterIcon />
        </IconButton>
        <IconButton className="text-color" href="#" target="_blank">
            <YouTubeIcon />
        </IconButton>
    </>
  )
}
