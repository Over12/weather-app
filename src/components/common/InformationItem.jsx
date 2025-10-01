import PropTypes from 'prop-types';
import { motion } from 'motion/react';

export default function InformationItem({ icon: Icon, label, value }) {
  return (
    <div className='flex items-center gap-2'>
      <Icon className='size-7 sm:size-9 text-primary' />
      <div>
        <p className='text-sm sm:text-base'>{label}</p>
        <motion.p key={value} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-sm sm:text-base font-bold'>{value}</motion.p>
      </div>
    </div>
  )
};

InformationItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
