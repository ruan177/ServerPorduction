import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();



const chaveDeCriptografia = "KucsFhFbS8XzFzzNRIYdlMGleFt19OxlnSWaQWJ8xjw=";

interface RefreshTokenPayload {
  id: string;
  expiresIn: string;
  user_id: string;
}

export const encryptObjectToken = async (tokenPayload: RefreshTokenPayload): Promise<string> => {
  const textEncoder = new TextEncoder();
  const encodedData = textEncoder.encode(JSON.stringify(tokenPayload));

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(chaveDeCriptografia),
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  );

  const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: crypto.randomBytes(12) }, key, encodedData);

  return Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('');
};
// Função para criptografar o token
export const encryptToken = async (token: string): Promise<string> => {
  const textEncoder = new TextEncoder();
  const encodedData = textEncoder.encode(token);

 
    const key = await crypto.subtle.importKey(
      'raw',
      Buffer.from(chaveDeCriptografia, 'base64'),
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );
  
    // Resto do código...

  const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, key, encodedData);

  return Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('');
};

// Função para descriptografar o token
export const decryptToken = async (encryptedToken: string): Promise<string> => {
  const textDecoder = new TextDecoder();
  const encryptedData = new Uint8Array(encryptedToken.split('').map(char => char.charCodeAt(0)));

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(chaveDeCriptografia),
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  );

  const decryptedData = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, key, encryptedData);

  return textDecoder.decode(decryptedData);
};
