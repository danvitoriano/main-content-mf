'use client'
import React from 'react'
import { 
  Paper, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  Button,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'
import { Code, Web, Settings } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

const MainContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
          🎉 Main Content MF - Module Federation Remote!
        </Typography>
        
        <Typography variant="h6" paragraph sx={{ color: '#666', mb: 4 }}>
          Este componente está sendo carregado remotamente via Module Federation
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundColor: '#e3f2fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Code sx={{ fontSize: 80, color: '#1976d2' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Module Federation
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Implementação com Module Federation do Webpack para carregamento dinâmico de micro-frontends. 
                  Cada componente é verdadeiramente independente e pode ser deployado separadamente.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip label="Next.js" color="primary" size="small" />
                  <Chip label="Module Federation" color="secondary" size="small" />
                  <Chip label="Webpack" color="info" size="small" />
                </Box>
                <Button variant="contained" color="primary">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundColor: '#f3e5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Web sx={{ fontSize: 80, color: '#dc004e' }} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Carregamento Remoto
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Este componente está sendo carregado dinamicamente de outro repositório/servidor,
                  demonstrando o verdadeiro poder dos micro-frontends.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip label="Remote" color="primary" size="small" />
                  <Chip label="Dynamic" color="secondary" size="small" />
                  <Chip label="Independent" color="success" size="small" />
                </Box>
                <Button variant="outlined" color="secondary">
                  Ver Código
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Paper sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Settings color="primary" />
            Características do Module Federation
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', p: 2 }}>
              <Typography variant="h6" color="primary">Independente</Typography>
              <Typography variant="body2">Cada micro-frontend é completamente independente</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', p: 2 }}>
              <Typography variant="h6" color="primary">Remoto</Typography>
              <Typography variant="body2">Carregado dinamicamente de URLs remotas</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', p: 2 }}>
              <Typography variant="h6" color="primary">Versionado</Typography>
              <Typography variant="body2">Cada remote pode ter sua própria versão</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', p: 2 }}>
              <Typography variant="h6" color="primary">Compartilhado</Typography>
              <Typography variant="body2">Dependências são compartilhadas eficientemente</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default MainContent 