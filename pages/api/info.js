// pages/api/info.js
export default function handler(req, res) {
    // Gestisce solo richieste GET
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    // Informazioni sulla community
    const communityInfo = {
      name: "AI Meetup",
      description: "Community italiana che rende l'intelligenza artificiale accessibile a tutti. Il nostro format parte da Biella ma crescerà in tutta Italia.",
      website: "https://biella.aimeetup.it",
      social: {
        linkedin: "https://www.linkedin.com/groups/10083428/",
        instagram: "https://www.instagram.com/biella.aimeetup/"
      },
      location: "Biella",
      format: "AI Meetup è un format italiano nato a Biella con l'obiettivo di espandersi in altre città italiane per rendere l'intelligenza artificiale accessibile a tutti."
    };
  
    return res.status(200).json(communityInfo);
  }