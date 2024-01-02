import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = mens_kurta.slice(0, 10).map((item, index) => (
        <HomeSectionCard product={item} key={index} />
    ));

    return (
        <div className='border'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    renderPrevButton={({ isDisabled, onClick }) => (
                        <Button
                            onClick={onClick}
                            disabled={isDisabled}
                            variant='contained'
                            className='z-50 bg-white'
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                left: '0rem',
                                transform: 'translateX(-50%) rotate(-90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label='prev'
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </Button>
                    )}
                    renderNextButton={({ isDisabled, onClick }) => (
                        <Button
                            onClick={onClick}
                            disabled={isDisabled}
                            variant='contained'
                            className='z-50 bg-white'
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                right: '0rem',
                                transform: 'translateX(50%) rotate(90deg)',
                                bgcolor: 'white',
                            }}
                            aria-label='next'
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                        </Button>
                    )}
                />
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
