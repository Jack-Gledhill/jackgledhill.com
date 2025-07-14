<script>
</script>

<h1>About the Project</h1>
<p>
    Constellation is a homelab; a collection of consumer and enterprise hardware that I use to learn about various technologies, and provide hosting for services.
    I've been working on the project since Summer 2024, and since then it's seen many, many iterations and refactors.
    I can't go into the project's entire history here, but I can talk about the current state of the project, what I hope to achieve with it in the future, and what I've learnt from it.
</p>

<h2>Constellation's Architecture</h2>
<p>
    Constellation is stored in a 20U server rack in my bedroom, and the hardware can be split into four main categories:
</p>
<ul>
    <li>Networking</li>
    <li><a href="https://kubernetes.io" target="_blank">Kubernetes</a> cluster</li>
    <li><a href="https://www.proxmox.com/en/" target="_blank">Proxmox</a> cluster</li>
    <li>Storage</li>
</ul>

<h3>Networking</h3>
<p>
    Constellation has its own MikroTik router separate from the rest of my home network.
    This allows me to make mistakes without affecting the others in my household (though it does create a double NAT which is not very efficient).
    It also includes a Power-over-Ethernet (PoE) capable switch, which allows me to power the devices in my Kubernetes cluster without needing a spare power socket for each device.
</p>

<h3>Kubernetes Cluster</h3>
<p>
    My Kubernetes cluster (codename: Hydra) is made up of five identical <a href="https://thepihut.com/products/raspberry-pi-5" target="_blank">Raspberry Pi 5s</a>.
    Each Pi has:
</p>
<ul>
    <li>8GB RAM</li>
    <li>128GB SATA SSD over USB</li>
    <li>16GB microSD for the OS</li>
    <li><a href="https://thepihut.com/products/poe-hat-for-raspberry-pi-5-with-cooling-fan" target="_blank">PoE HAT</a></li>
</ul>
<p>
    On the software side, the cluster runs <a href="https://k3s.io" target="_blank">K3s</a>, a lightweight Kubernetes distribution that's easy to get up-and-running without a faff.
    It also includes various controllers that expand its functionality, such as:
</p>
<ul>
    <li><a href="https://traefik.io" target="_blank">Traefik</a>, an ingress controller</li>
    <li><a href="https://metallb.io" target="_blank">MetalLB</a>, which provides Highly Available networking</li>
    <li><a href="https://longhorn.io" target="_blank">Longhorn</a>, for Highly Available clustered storage</li>
</ul>
<p>
    My goal with Hydra is for it to be a Highly Available cluster that runs most of the services in my homelab.
    Having HA means that if any two of the Raspberry Pis go offline, the cluster will still operate as normal.
    This is important for a lot of the services that run on my other hardware, as they may depend on the software running on Hydra.
</p>

<h3>Proxmox Cluster</h3>
<p>
    OK, so my Proxmox cluster (codename: Olympus) isn't actually a cluster.
    Currently, it's just a single node running all of my virtual machines.
    However, I do plan to expand upon it and make it a fully HA cluster in the future.
</p>
<p>
    My needs with Olympus are quite different to Hydra.
    While Hydra handles all the essential things, Olympus tends to be more of a playground: it runs testing VMs, game servers, and anything I simply can't put elsewhere.
</p>

<h3>Storage</h3>
<p>
    Constellation also happens to have its own storage server (codename: Sagittarius).
    Sagittarius runs <a href="https://truenas.com">TrueNAS SCALE</a>, with over 20TB of usable storage across 8x 4TB hard drives in a 2x4 RAIDZ1 configuration.
    It also has two additional 128GB SSDs for metadata and small files, and in future will have a dedicated SLOG and L2ARC SSD for caching.
</p>
<p>
    The storage server is primarily used for backups, including of the other hardware in Constellation, and of my own devices through macOS Time Machine.
    It also serves as a media server, hosting my personal collection of music, videos and photos.
</p>
<p>
    Sagittarius is also capable of running virtual machines, but this is reserved for things like <a href="https://www.proxmox.com/en/products/proxmox-backup-server/overview" target="_blank">Proxmox Backup Server</a>, which can only be run as an OS.
    As a general rule: if it doesn't have to run on Sagittarius, it shouldn't.
</p>

<h2>What I've Learnt</h2>
<p>
    Constellation has been invaluable in teaching me various skills that can be applied in industry.
    Primarily, I've learnt about the basics of <a href="https://kubernetes.io">Kubernetes</a> and horizontal scaling, along with networking topics like subnetting, VLANs and cybersecurity.
</p>
<p>
    It's been so instrumental, that I've even decided to teach others what I've learnt.
    I've already ran a <a href="/about/k8s" target="_blank">workshop on Kubernetes</a>, and in the future plan to run workshops on subnetting and VLANs under <a href="/about/shefesh" target="_blank">ShefESH</a>.
</p>