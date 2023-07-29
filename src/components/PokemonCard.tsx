import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

const PokemonCardRoot = styled(Box)(() => ({
  width: 253,
  border: '11px solid #1D2C5E',
  borderRadius: 16,
  overflow: 'hidden'
}));

const PokemonImageWrapper = styled(Box)(() => ({
  position: 'relative',
  height: 213,
  overflow: 'hidden',
  background: 'linear-gradient(154deg, #C8FF9C 27.68%, #FFDA7A 74.71%, #78DFFF 100%)'
}));

const PokemonId = styled(Typography)(() => ({
  position: 'absolute',
  width: 35,
  height: 36,
  borderRadius: 30,
  background: '#374151',
  padding: '8px 4px',
  inset: '12px 12px auto auto',
  fontWeight: 700,
  color: 'white',
  userSelect: 'none',
  fontSize: 14 / 16 + 'rem',
  lineHeight: 20 / 16,
  display: 'flex',
  alignItems: 'center'
}));

const PokemonDetails = styled(Box)(() => ({
  padding: '15px 21px 40px',
  height: '100%',
  background: '#E5E7EB'
}));

const PokemonName = styled(Typography)(() => ({
  fontSize: 18 / 16 + 'rem',
  lineHeight: 28 / 18,
  fontWeight: 800,
  color: '#1F2937'
}));

const PokemonType = styled(Typography)(() => ({
  fontSize: 12 / 16 + 'rem',
  lineHeight: 16 / 12,
  fontWeight: 700,
  color: 'white',
  background: '#374151',
  width: 'fit-content',
  padding: '4px 8px',
  borderRadius: 10,
  userSelect: 'none'
}));

const PokemonStat = styled(Typography)(() => ({
  fontSize: 12 / 16 + 'rem',
  lineHeight: 16 / 12,
  fontWeight: 500,
  color: '#6B7280',
  borderRadius: 10
}));

export default function PokemonCard() {
  return (
    <PokemonCardRoot>
      <PokemonImageWrapper>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
          alt='pokemon image'
          fill
          sizes='@media(min-width: 10vw)'
          priority
        />
        <PokemonId>001</PokemonId>
      </PokemonImageWrapper>
      <PokemonDetails>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PokemonName>Bulbasaur</PokemonName>
          <PokemonType>Grass</PokemonType>
        </Box>
        <PokemonStat>Seed Pokémon</PokemonStat>
      </PokemonDetails>
    </PokemonCardRoot>
  );
}
