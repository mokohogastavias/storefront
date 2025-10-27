export default function WhatsAppFloat() {
  const phoneNumber = "27686172855";
  const message = "Hi PlugMeUp! I need help with my order or want to ask about products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      💬
    </a>
  );
}
