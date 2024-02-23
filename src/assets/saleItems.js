const saleItems = [
    {
        id: 1,
        title: "Appartement 1 chambre à vendre",
        address: "Rue NKT , Agdal, Rabat 25",
        price: 600000,
        shortDescription: "Cet Appartement Bénéficie...",
        longDescription: "Cet appartement bénéficie d'une immense cuisine ouverte moderne avec une réception, de deux salles de bains dont une attenante à la chambre principale.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1543053927-0f3795a46e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1574118139440-94aef80059b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 1,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 2,
        title: "Propriété de 2 chambres à vendre",
        address: "Propriété de 2 chambres à vendre",
        price: 350000,
        shortDescription: "Immaculée Deux Chambres Doubles...",
        longDescription: "Immaculée maisonnette de deux chambres doubles au rez-de-chaussée située dans un accès facile à Kingsbury High Street et d'excellentes liaisons de transport.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1585128954430-22fe5b6acbea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 2,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 3,
        title: "Propriété de 3 chambres à vendre",
        address: "Rue NKT , Agdal, Rabat 25",
        price: 440000,
        shortDescription: "Fin de maison mitoyenne de trois chambres...",
        longDescription: "Extrémité de trois chambres d'une maison familiale mitoyenne à Fuller Road, North Watford. Cette propriété bénéficie d'une réception avec un coin repas, d'une cuisine séparée moderne équipée.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 3,
        bathrooms: 1,
        livingrooms: 1
    },
    {
        id: 4,
        title: "Appartement de 3 chambres à vendre",
        address: "Rue NKT , Agdal, Rabat 25",
        price: 650000,
        shortDescription: "Superbe appartement impeccable de trois chambres...",
        longDescription: "Superbe appartement impeccable de trois chambres au dernier étage. Cette propriété bénéficie d'une cuisine ouverte moderne et élégante avec une réception et de deux salles de bains modernes.",
        images: [
            {
                original: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
              {
                original: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                thumbnail: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
              },
            ],
        image1: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image2: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image3: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image4: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        image5: "https://images.unsplash.com/photo-1570544820842-e73cd90df808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        bedrooms: 3,
        bathrooms: 2,
        livingrooms: 1
    }
];

export default saleItems;