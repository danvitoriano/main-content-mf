// Microfrontend Main Content - Exposição para carregamento remoto
(function() {
  'use strict';
  
  if (typeof window !== 'undefined') {
    window.mainContentMicrofrontend = {
      mount: function(element) {
        console.log('Main Content MF: Mount chamado', element);
        
        element.innerHTML = `
          <div style="padding: 24px;">
            <h1 style="color: #1976d2; margin-bottom: 24px;">Bem-vindo ao Micro-Frontend App (Remoto)</h1>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px;">
              <div style="background: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #1976d2; margin-bottom: 16px;">🚀 Micro-frontends</h2>
                <p style="color: #666; line-height: 1.6;">
                  Arquitetura modular que permite desenvolvimento independente de cada parte da aplicação.
                </p>
                <div style="margin-top: 16px;">
                  <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    Single-SPA
                  </span>
                  <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px;">
                    Next.js
                  </span>
                </div>
              </div>
              
              <div style="background: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #1976d2; margin-bottom: 16px;">🎨 Material UI</h2>
                <p style="color: #666; line-height: 1.6;">
                  Sistema de design consistente com componentes React prontos para uso.
                </p>
                <div style="margin-top: 16px;">
                  <span style="background: #e8f5e8; color: #2e7d32; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    TypeScript
                  </span>
                  <span style="background: #e8f5e8; color: #2e7d32; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px;">
                    React
                  </span>
                </div>
              </div>
              
              <div style="background: white; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <h2 style="color: #1976d2; margin-bottom: 16px;">☁️ Deploy</h2>
                <p style="color: #666; line-height: 1.6;">
                  Deployment independente no Vercel com integração contínua via GitHub.
                </p>
                <div style="margin-top: 16px;">
                  <span style="background: #fff3e0; color: #f57c00; padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                    Vercel
                  </span>
                  <span style="background: #fff3e0; color: #f57c00; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px;">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%); color: white; padding: 32px; border-radius: 12px; text-align: center;">
              <h2 style="margin-bottom: 16px;">🔧 Arquitetura Micro-Frontend</h2>
              <p style="margin-bottom: 24px; opacity: 0.9;">
                Cada componente roda independentemente e pode ser desenvolvido, testado e deployado separadamente.
              </p>
              <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                <div style="background: rgba(255,255,255,0.2); padding: 12px 16px; border-radius: 8px;">
                  Header: :3001
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 12px 16px; border-radius: 8px;">
                  Sidebar: :3002
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 12px 16px; border-radius: 8px;">
                  Main: :3003
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 12px 16px; border-radius: 8px;">
                  Footer: :3004
                </div>
              </div>
            </div>
          </div>
        `;
      },
      
      unmount: function(element) {
        console.log('Main Content MF: Unmount chamado', element);
        if (element) {
          element.innerHTML = '';
        }
      }
    };
  }
})(); 