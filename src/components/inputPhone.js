import React from 'react';
import {IMaskInput} from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import SC from '@emotion/styled';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const {onChange, ...other} = props;
  const handleAccept = v => {
    const value = (v || '').replace(/ /g, '').replace(/-/g, '');
    onChange({target: {name: props.name, value}});
  };

  return (
    <IMaskInput
      {...other}
      // mask="+{7} 000 000-00-00"
      mask="+00000000000[0]"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={handleAccept}
      overwrite
    />
  );
});

const HelperText = SC(FormHelperText)``;

const Label = SC(InputLabel)``;

const Container = SC(FormControl)``;

export const InputPhone = ({label, helperText, focused, disabled, error, required, variant = 'standard', ...other}) => {
  const formProps = {
    disabled,
    error,
    required,
    variant,
  };
  return (
    <Container focused={focused} {...formProps}>
      {label && <Label shrink>{label}</Label>}
      {/*<Input type="tel" placeholder="+7 ___ ___-__-__" inputComponent={TextMaskCustom} {...other} />*/}
      <Input type="tel" inputComponent={TextMaskCustom} {...other} />
      {helperText && (
        <HelperText id="helper-text" focused={focused}>
          {helperText}
        </HelperText>
      )}
    </Container>
  );
};
