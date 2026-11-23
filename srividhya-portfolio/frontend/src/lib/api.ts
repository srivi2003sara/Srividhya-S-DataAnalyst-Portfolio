const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
export async function sendContactMessage(payload: { name: string; email: string; message: string }) {
  if (!API_URL) throw new Error('Contact service is not configured yet. Please email me directly instead.');
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Unable to send your message. Please try again.');
  return data;
}