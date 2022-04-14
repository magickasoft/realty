import React from 'react';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import SC from 'styled-components';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  const handleAccept = (v) => {
    const value = (v || '').replace(/ /g, '').replace(/-/g, '');
    onChange({ target: { name: props.name, value } });
  };

  return (
    <IMaskInput
      {...other}
      mask="+{7} 000 000-00-00"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={handleAccept}
      overwrite
    />
  );
});

const HelperText = SC(FormHelperText)`
  margin-right: 0;
  margin-left: 0;
`;

const Label = SC(InputLabel)`
  left: -14px;
`;

const Container = SC(FormControl)`
  margin-top: ${({withLabel}) => `${withLabel ? 14: 0}px`};
`;

export const InputPhone = ({
  label,
  helperText,
  focused,
  disabled,
  error,
  required,
  variant,
  ...other
}) => {
  const formProps = {
    disabled,
    error,
    required,
    variant,
  };
  return (
    <Container withLabel={Boolean(label)} focused={focused} {...formProps}>
      {label && <Label shrink>{label}</Label>}
      <Input
        type="tel"
        placeholder="+7 ___ ___-__-__"
        inputComponent={TextMaskCustom}
        {...other}
      />
      {helperText && <HelperText id="helper-text" focused={focused}>{helperText}</HelperText>}
    </Container>
  );
};
