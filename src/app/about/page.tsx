"use client"
import { Heading, Text, Flex, Button } from '@/once-ui/components';
import Image from 'next/image'; // Pakai Image dari Next.js untuk gambar
import styled from '@emotion/styled'; // Atau pakai styled-components untuk styling tambahan

export default function AboutMe() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      padding="8"
      gap="8"
      style={{
        minHeight: '100vh',
        backgroundImage: 'radial-gradient(circle, #282c34, #121417)',
        color: 'white',
      }}
    >
      <ProfileSection>
        <Image
          src="/me.jpg" // Ganti dengan path ke gambar lo
          alt="Bima Adam"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
        <Heading as="h1" size="xl" color="brand.primary">
          Bima Adam
        </Heading>
        <Text fontSize="lg" color="brand.secondary" mt="2">
          Web Developer & Tech Enthusiast
        </Text>
      </ProfileSection>

      <TextSection>
        <Text fontSize="md" lineHeight="tall" color="neutral.light">
          Halo, gue Bima Adam. Gue seorang pengembang web yang suka ngoprek teknologi baru dan explore berbagai tools buat bikin aplikasi keren. Di halaman ini, lo bisa tau lebih banyak tentang gue dan perjalanan gue di dunia teknologi.
        </Text>
      </TextSection>

      <Flex as="section" textAlign="center">
        <Button
          variant="outline"
          size="lg"
          mt="4"
          onClick={() => alert('Terima kasih sudah mengunjungi!')}
        >
          Contact Me
        </Button>
      </Flex>
    </Flex>
  );
}

// Styled components untuk section profile dan text
const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const TextSection = styled.div`
  max-width: 600px;
  text-align: center;
`;
