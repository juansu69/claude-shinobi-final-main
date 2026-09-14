"use client";
import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";

export default function Preview() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
      <section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Typography & Theme Showcase</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
          This page demonstrates our custom theme with beautiful typography pairing. Headings use the elegant Playfair Display serif font, while body text uses the clean and modern Rubik sans-serif font.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System Colors</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>
          Our theme features a purple primary color with carefully chosen complementary colors for success, warning, and danger states. The system automatically adapts between light and dark modes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Components</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Our button components showcase the theme colors in action with hover effects and focus states.
        </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>
        
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>
        
        <Button variant="success" onClick={() => console.log('Success clicked')}>
          Success Button
        </Button>
        
        <Button variant="warning" onClick={() => console.log('Warning clicked')}>
          Warning Button
        </Button>
        
        <Button variant="danger" onClick={() => console.log('Danger clicked')}>
          Danger Button
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled States</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        All button variants maintain consistent styling when disabled, with reduced opacity for clear visual feedback.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        
        <Button variant="success" disabled>
          Success Disabled
        </Button>
        
        <Button variant="warning" disabled>
          Warning Disabled
        </Button>
        
        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        Real-world button implementations showing different types and interactive behaviors.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>
        
        <Button variant="secondary" type="reset">
          Reset Form
        </Button>
        
        <Button variant="success" onClick={() => alert('Changes saved!')}>
          Save Changes
        </Button>
        
        <Button variant="warning" onClick={() => confirm('Are you sure you want to proceed?')}>
          Proceed with Caution
        </Button>
        
        <Button variant="danger" onClick={() => confirm('This action cannot be undone. Continue?')}>
          Delete Account
        </Button>
      </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Card Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Cards group related content with a colored left-border accent matching each theme variant.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="primary" title="Primary Card">
            This card uses the primary theme color accent.
          </Card>
          <Card variant="secondary" title="Secondary Card">
            This card uses the secondary theme color accent.
          </Card>
          <Card variant="success" title="Success Card">
            This card uses the success theme color accent.
          </Card>
          <Card variant="warning" title="Warning Card">
            This card uses the warning theme color accent.
          </Card>
          <Card variant="danger" title="Danger Card">
            This card uses the danger theme color accent.
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxWidth: '400px' }}>
          <Card variant="primary" size="sm" title="Small Card">
            Compact padding for dense layouts.
          </Card>
          <Card variant="primary" size="md" title="Medium Card (default)">
            Default size, suitable for most use cases.
          </Card>
          <Card variant="primary" size="lg" title="Large Card">
            Generous padding for featured or prominent content.
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>With Footer</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="success" title="Saved" footer="Last updated: just now">
            Your changes have been saved successfully.
          </Card>
          <Card variant="danger" title="Error" footer={<Button variant="danger" onClick={() => alert('Retry!')}>Retry</Button>}>
            Something went wrong. Please try again.
          </Card>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled State</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <Card variant="primary" title="Disabled Card" disabled>
            This card is disabled and non-interactive.
          </Card>
          <Card variant="warning" title="Also Disabled" disabled footer="Footer is also muted">
            Opacity is reduced when disabled.
          </Card>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Icon Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Icons display content inside a circular background, styled with theme variant colors and available in three sizes.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <Icon variant="primary" aria-label="primary icon">★</Icon>
          <Icon variant="secondary" aria-label="secondary icon">★</Icon>
          <Icon variant="success" aria-label="success icon">✓</Icon>
          <Icon variant="warning" aria-label="warning icon">!</Icon>
          <Icon variant="danger" aria-label="danger icon">✕</Icon>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <Icon variant="primary" size="sm" aria-label="small icon">★</Icon>
          <Icon variant="primary" size="md" aria-label="medium icon">★</Icon>
          <Icon variant="primary" size="lg" aria-label="large icon">★</Icon>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled State</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <Icon variant="primary" disabled aria-label="disabled primary">★</Icon>
          <Icon variant="success" disabled aria-label="disabled success">✓</Icon>
          <Icon variant="danger" disabled aria-label="disabled danger">✕</Icon>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Modal Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Modals overlay the page with a semi-transparent backdrop. Click any button to open a modal variant, press Escape or click the backdrop to close.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setOpenModal('primary')}>Open Primary</Button>
          <Button variant="secondary" onClick={() => setOpenModal('secondary')}>Open Secondary</Button>
          <Button variant="success" onClick={() => setOpenModal('success')}>Open Success</Button>
          <Button variant="warning" onClick={() => setOpenModal('warning')}>Open Warning</Button>
          <Button variant="danger" onClick={() => setOpenModal('danger')}>Open Danger</Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setOpenModal('sm')}>Small Modal</Button>
          <Button variant="primary" onClick={() => setOpenModal('md')}>Medium Modal</Button>
          <Button variant="primary" onClick={() => setOpenModal('lg')}>Large Modal</Button>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Title</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <Button variant="secondary" onClick={() => setOpenModal('no-title')}>No Title Modal</Button>
        </div>

        {/* Variant modals */}
        <Modal isOpen={openModal === 'primary'} onClose={() => setOpenModal(null)} variant="primary" title="Primary Modal"
          footer={<><Button variant="secondary" onClick={() => setOpenModal(null)}>Cancel</Button><Button variant="primary" onClick={() => setOpenModal(null)}>Confirm</Button></>}>
          <p>This is a <strong>primary</strong> modal. It uses the primary theme color for its header accent. Press Escape or click outside to close.</p>
        </Modal>
        <Modal isOpen={openModal === 'secondary'} onClose={() => setOpenModal(null)} variant="secondary" title="Secondary Modal"
          footer={<Button variant="secondary" onClick={() => setOpenModal(null)}>Close</Button>}>
          <p>This is a <strong>secondary</strong> modal variant with the secondary theme color styling.</p>
        </Modal>
        <Modal isOpen={openModal === 'success'} onClose={() => setOpenModal(null)} variant="success" title="Success!"
          footer={<Button variant="success" onClick={() => setOpenModal(null)}>Done</Button>}>
          <p>Your changes have been saved successfully. This is the <strong>success</strong> modal variant.</p>
        </Modal>
        <Modal isOpen={openModal === 'warning'} onClose={() => setOpenModal(null)} variant="warning" title="Warning"
          footer={<><Button variant="secondary" onClick={() => setOpenModal(null)}>Cancel</Button><Button variant="warning" onClick={() => setOpenModal(null)}>Proceed</Button></>}>
          <p>Proceed with caution. This is the <strong>warning</strong> modal variant with amber styling.</p>
        </Modal>
        <Modal isOpen={openModal === 'danger'} onClose={() => setOpenModal(null)} variant="danger" title="Confirm Deletion"
          footer={<><Button variant="secondary" onClick={() => setOpenModal(null)}>Cancel</Button><Button variant="danger" onClick={() => setOpenModal(null)}>Delete</Button></>}>
          <p>Are you sure you want to delete this item? This action <strong>cannot be undone</strong>. This is the danger modal variant.</p>
        </Modal>

        {/* Size modals */}
        <Modal isOpen={openModal === 'sm'} onClose={() => setOpenModal(null)} variant="primary" size="sm" title="Small Modal"
          footer={<Button variant="primary" onClick={() => setOpenModal(null)}>OK</Button>}>
          <p>A compact small-sized modal, great for quick confirmations.</p>
        </Modal>
        <Modal isOpen={openModal === 'md'} onClose={() => setOpenModal(null)} variant="primary" size="md" title="Medium Modal (Default)"
          footer={<Button variant="primary" onClick={() => setOpenModal(null)}>OK</Button>}>
          <p>The default medium-sized modal. Works well for most use cases with a balanced content area.</p>
        </Modal>
        <Modal isOpen={openModal === 'lg'} onClose={() => setOpenModal(null)} variant="primary" size="lg" title="Large Modal"
          footer={<><Button variant="secondary" onClick={() => setOpenModal(null)}>Cancel</Button><Button variant="primary" onClick={() => setOpenModal(null)}>Save</Button></>}>
          <p>A large modal for more complex content. Useful for forms, detailed information, or media. It stretches wider to accommodate richer content layouts.</p>
        </Modal>

        {/* No title modal */}
        <Modal isOpen={openModal === 'no-title'} onClose={() => setOpenModal(null)} variant="secondary"
          footer={<Button variant="secondary" onClick={() => setOpenModal(null)}>Close</Button>}>
          <p style={{ paddingTop: '1rem' }}>This modal has no title. The close button appears in the top-right corner of the panel instead of in a header bar.</p>
        </Modal>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Typography Hierarchy</h2>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Main Heading (H1)</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Section Heading (H2)</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subsection Heading (H3)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is regular paragraph text using Rubik. It's clean, readable, and pairs beautifully with the Playfair Display headings. The contrast between the geometric sans-serif and elegant serif creates visual interest while maintaining excellent readability.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            This is smaller text in muted color, perfect for captions or secondary information.
          </p>
        </div>
      </section>
    </div>
  );
}