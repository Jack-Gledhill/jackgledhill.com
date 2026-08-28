<script lang="ts">
    import "../../styles/article.css";
    import { Footer } from '$lib/components';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="p-8 md:py-12 lg:px-72 flex flex-col gap-4">
    <a class="text-center md:text-left" href="/">
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
        <span class="underline hover:text-slate-400">Back home</span>
    </a>

    <article>
        <h1>Copyright & Attributions</h1>
        <hr />
        <p>
            The Kubernetes logo is copyright &copy; 2025 The Linux Foundation and reproduced here under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.
        </p>

        <p>
            The ShefESH logo is copyright &copy; 2018 Sheffield Ethical Student Hackers and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The CompSoc logo is copyright &copy; 2025 Sheffield Computer Science Society and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The HackSheffield logo is copyright &copy; 2024 Sheffield Computer Science Society and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The NoDDSoc logo is copyright &copy; 2025 Not Only Dungeons and Dragons Society and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The SLUGSoc logo is copyright &copy; 2025 Sheffield LAN Gaming Society and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The TSC logo is copyright &copy; 2025 Technical Services Committee and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The HackUPC logo is copyright &copy; 2024 Hackers@UPC and is reproduced here under <a href="https://www.legislation.gov.uk/ukpga/1988/48/section/30">Section 30 of the Copyright, Designs and Patents Act 1988</a>.
        </p>

        <p>
            The FontAwesome icons are copyright &copy; 2025 Fort Awesome and reproduced here under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.
        </p>
    </article>
</div>

<Footer />