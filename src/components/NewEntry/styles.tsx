import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PrimaryButton } from 'components/Basic/Button';
import { TextInput } from 'components/Basic/Input';

export const Container = styled('div')`
    margin-right: 40px;
    margin-top: 40px;
    display: grid;
`;

export const StyledInput = styled(TextInput)`
    width: 80%;
    margin-bottom: 40px;
`;

export const StyledButton = styled(PrimaryButton)`
    width: 40%;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const EditorBox = styled(Box)`
    width: 80%;
  border: 2px solid #2450EC;
  border-radius: 5px;
  height: 400px;
  overflow: auto;
  padding : 20px
`